<?php

namespace Rwsoft\RwTableLaravel\Actions;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class RwTableAction
{
    /**
     * @param  class-string<Model>  $modelClass
     * @param  array<int, string>  $globalFields
     * @param  array<string, mixed>  $extraProps
     */
    public static function handle(
        Request $request,
        string $modelClass,
        string $viewComponent,
        array $globalFields = ['id'],
        int $perPageDefault = 25,
        array $extraProps = [],
        ?callable $queryCallback = null
    ): Response {
        $columns = self::parseColumns(self::getRequestValue($request, 'columns', []));

        if (! empty($columns)) {
            $first = $columns[0] ?? null;

            if (is_string($first)) {
                $globalFields = array_values(array_filter($columns, fn (mixed $column): bool => is_string($column)));
            } else {
                $selectedColumns = array_filter(
                    $columns,
                    fn (mixed $column): bool => is_array($column) && ! empty($column['selected'])
                );

                $globalFields = array_values(
                    array_filter(
                        array_map(
                            fn (mixed $column): ?string => is_array($column) ? (string) ($column['key'] ?? '') : null,
                            $selectedColumns
                        )
                    )
                );
            }
        }

        $idKey = self::sanitizeField((string) self::getRequestValue($request, 'idKey', 'id'), 'id');

        $query = $modelClass::query();

        if ($queryCallback) {
            $queryCallback($query);
        }

        $table = $query->getModel()->getTable();

        $global = (string) self::getRequestValue($request, 'global', '');
        $page = max(1, (int) self::getRequestValue($request, 'page', 1));

        if ($global !== '') {
            $isNumericGlobal = ctype_digit($global);

            $query->where(function (Builder $nestedQuery) use ($global, $isNumericGlobal, $globalFields, $table, $idKey): void {
                foreach ($globalFields as $field) {
                    $column = self::resolveColumn($table, $field);

                    if ($column === null) {
                        continue;
                    }

                    if ($field === $idKey) {
                        if ($isNumericGlobal) {
                            $nestedQuery->orWhere($column, (int) $global);
                        }

                        continue;
                    }

                    $nestedQuery->orWhereRaw("CAST({$column} AS CHAR) LIKE ?", ["%{$global}%"]);
                }
            });
        }

        /** @var array<string, mixed> $filters */
        $filters = (array) self::getRequestValue($request, 'filters', []);
        /** @var array<string, mixed> $filterModes */
        $filterModes = (array) self::getRequestValue($request, 'filterModes', []);
        /** @var array<string, mixed> $filterTypes */
        $filterTypes = (array) self::getRequestValue($request, 'filterTypes', []);

        foreach ($filters as $field => $value) {
            if (! is_string($field)) {
                continue;
            }

            $column = self::resolveColumn($table, $field);

            if ($column === null) {
                continue;
            }

            $mode = (string) ($filterModes[$field] ?? '=');
            $filterType = (string) ($filterTypes[$field] ?? 'text');

            if (is_array($value) && isset($value['from'], $value['to'])) {
                $from = self::safeParseDate((string) $value['from'])?->startOfDay();
                $to = self::safeParseDate((string) $value['to'])?->endOfDay();

                if ($from && $to) {
                    $query->whereBetween($column, [$from, $to]);
                }

                continue;
            }

            self::applyFilter($query, $column, $filterType, $mode, $value);
        }

        $selectionFilter = (string) self::getRequestValue($request, 'selectionFilter', 'none');
        /** @var array<int|string> $selectedIds */
        $selectedIds = (array) self::getRequestValue($request, 'selectedRowIds', []);

        if (! empty($selectedIds) && in_array($selectionFilter, ['exclude', 'only'], true)) {
            $pkColumn = "{$table}.{$idKey}";

            if ($selectionFilter === 'exclude') {
                $query->whereNotIn($pkColumn, $selectedIds);
            } else {
                $query->whereIn($pkColumn, $selectedIds);
            }
        }

        $manualOrdering = (bool) self::getRequestValue($request, 'manualOrdering', false);
        $manualOrderField = self::sanitizeField((string) self::getRequestValue($request, 'manualOrderField', 'index'), 'index');
        $sortField = self::sanitizeField((string) self::getRequestValue($request, 'sortField', $idKey), $idKey);
        $sortOrder = strtolower((string) self::getRequestValue($request, 'sortOrder', 'asc'));
        $sortOrder = in_array($sortOrder, ['asc', 'desc'], true) ? $sortOrder : 'asc';

        if ($manualOrdering) {
            $sortField = $manualOrderField;
            $sortOrder = 'asc';
        }

        $sortColumn = self::resolveColumn($table, $sortField) ?? "{$table}.{$idKey}";
        $query->orderBy($sortColumn, $sortOrder);

        $perPage = max(1, (int) self::getRequestValue($request, 'rowsPerPage', $perPageDefault));
        $data = $query->paginate($perPage, ['*'], 'page', $page)->withQueryString();

        $propName = Str::plural(Str::snake(class_basename($modelClass)));

        return Inertia::render($viewComponent, array_merge(
            [$propName => $data],
            $extraProps
        ));
    }

    /**
     * @param  class-string<Model>  $modelClass
     * @param  array<int, string>  $editableFields
     */
    public static function update(
        Request $request,
        string $modelClass,
        int|string $id,
        array $editableFields = [],
        string $idKey = 'id'
    ): JsonResponse {
        $field = self::sanitizeField((string) $request->input('field', ''), '');

        if ($field === '') {
            return response()->json([
                'message' => __('rwtable::rwtable.backend.messages.field_required'),
            ], 422);
        }

        if (! empty($editableFields) && ! in_array($field, $editableFields, true)) {
            return response()->json([
                'message' => __('rwtable::rwtable.backend.messages.field_not_editable'),
            ], 422);
        }

        $validationType = (string) $request->input('validationType');

        if (! in_array($validationType, ['model', 'client'], true)) {
            return response()->json([
                'message' => __('rwtable::rwtable.backend.messages.validation_type_required'),
            ], 422);
        }

        /** @var array<int, mixed> $extraUpdatesInput */
        $extraUpdatesInput = (array) $request->input('extraUpdates', []);

        /** @var array<string, mixed> $extraValidationRules */
        $extraValidationRules = (array) $request->input('extraValidationRules', []);

        $updates = [$field => $request->input('value')];

        foreach ($extraUpdatesInput as $update) {
            if (! is_array($update)) {
                continue;
            }

            $extraField = self::sanitizeField((string) ($update['field'] ?? ''), '');

            if ($extraField === '' || $extraField === $field) {
                continue;
            }

            if (! empty($editableFields) && ! in_array($extraField, $editableFields, true)) {
                return response()->json([
                    'message' => __('rwtable::rwtable.backend.messages.extra_field_not_editable', [
                        'field' => $extraField,
                    ]),
                ], 422);
            }

            $updates[$extraField] = $update['value'] ?? null;
        }

        $modelRules = [];

        if (method_exists($modelClass, 'rules')) {
            $modelRuleSet = $modelClass::rules($id);

            if (is_array($modelRuleSet)) {
                $modelRules = $modelRuleSet;
            }
        }

        if ($validationType === 'model' && $modelRules === []) {
            return response()->json([
                'message' => __('rwtable::rwtable.backend.messages.model_rules_missing'),
            ], 422);
        }

        $rulesMap = [];

        foreach ($updates as $updateField => $updateValue) {
            $rules = null;

            if ($validationType === 'model') {
                if (! array_key_exists($updateField, $modelRules)) {
                    return response()->json([
                        'message' => __('rwtable::rwtable.backend.messages.validation_rules_missing_for_field', [
                            'field' => $updateField,
                        ]),
                    ], 422);
                }

                $rules = $modelRules[$updateField];
            }

            if ($validationType === 'client') {
                if ($updateField === $field) {
                    $rules = $request->input('validationRules');

                    if (! $rules) {
                        return response()->json([
                            'message' => __('rwtable::rwtable.backend.messages.validation_rules_required'),
                        ], 422);
                    }
                } elseif (array_key_exists($updateField, $extraValidationRules)) {
                    $rules = $extraValidationRules[$updateField];
                } elseif (array_key_exists($updateField, $modelRules)) {
                    $rules = $modelRules[$updateField];
                } else {
                    return response()->json([
                        'message' => __('rwtable::rwtable.backend.messages.validation_rules_required_for_extra_field', [
                            'field' => $updateField,
                        ]),
                    ], 422);
                }
            }

            if (self::rulesContain($rules, 'boolean') && is_string($updateValue)) {
                $parsed = filter_var($updateValue, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);

                if ($parsed !== null) {
                    $updateValue = $parsed;
                }
            }

            $updates[$updateField] = $updateValue;
            $rulesMap[$updateField] = $rules;
        }

        $validator = validator($updates, $rulesMap);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $model = $modelClass::query()->where($idKey, $id)->firstOrFail();
        $model->forceFill($updates)->save();

        $updated = [];

        foreach (array_keys($updates) as $updateField) {
            $updated[$updateField] = $model->getAttribute($updateField);
        }

        return response()->json([
            'id' => $model->getAttribute($idKey),
            'field' => $field,
            'value' => $model->getAttribute($field),
            'updated' => $updated,
        ]);
    }

    /**
     * @param  class-string<Model>  $modelClass
     * @param  array<int, string>  $editableFields
     * @param  array<string, mixed>  $defaults
     */
    public static function create(
        Request $request,
        string $modelClass,
        array $editableFields = [],
        array $defaults = [],
        string $idKey = 'id'
    ): JsonResponse {
        $validationType = (string) $request->input('validationType');

        if (! in_array($validationType, ['model', 'client'], true)) {
            return response()->json([
                'message' => __('rwtable::rwtable.backend.messages.validation_type_required'),
            ], 422);
        }

        $manualOrdering = $request->boolean('manualOrdering');
        $manualOrderField = self::sanitizeField((string) $request->input('manualOrderField', 'index'), 'index');
        $insertAboveId = $request->input('insertAboveId');

        $payload = $request->except([
            'validationType',
            'validationRules',
            '_token',
            'manualOrdering',
            'manualOrderField',
            'insertAboveId',
        ]);

        $data = array_merge($defaults, $payload);

        if (! empty($editableFields)) {
            $data = array_intersect_key($data, array_flip($editableFields));
        }

        if ($manualOrdering) {
            if ($insertAboveId !== null) {
                $data[$manualOrderField] = self::computeInsertAboveIndex($modelClass, $manualOrderField, $insertAboveId, $idKey);
            } elseif (! array_key_exists($manualOrderField, $data) || $data[$manualOrderField] === null) {
                $maxIndex = $modelClass::query()->max($manualOrderField);
                $data[$manualOrderField] = ($maxIndex ?? 0) + 1000;
            }
        }

        $rules = null;

        if ($validationType === 'model') {
            if (! method_exists($modelClass, 'rules')) {
                return response()->json([
                    'message' => __('rwtable::rwtable.backend.messages.model_rules_missing'),
                ], 422);
            }

            $rules = $modelClass::rules(0);
        }

        if ($validationType === 'client') {
            $rules = $request->input('validationRules');

            if (! $rules) {
                return response()->json([
                    'message' => __('rwtable::rwtable.backend.messages.validation_rules_required'),
                ], 422);
            }
        }

        $validator = validator($data, $rules ?? []);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $model = new $modelClass;
        $model->forceFill($data)->save();
        $model->refresh();

        return response()->json([
            'id' => $model->getAttribute($idKey),
            'data' => $model,
        ]);
    }

    /**
     * @param  class-string<Model>  $modelClass
     */
    public static function destroy(Request $request, string $modelClass, int|string $id, string $idKey = 'id'): JsonResponse
    {
        $model = $modelClass::query()->where($idKey, $id)->firstOrFail();
        $model->delete();

        return response()->json([
            'id' => $model->getAttribute($idKey),
        ]);
    }

    /**
     * @param  class-string<Model>  $modelClass
     */
    public static function reindexOrdering(string $modelClass, string $orderField = 'index', string $idKey = 'id'): JsonResponse
    {
        self::rebalanceOrdering($modelClass, $orderField, $idKey);

        return response()->json([
            'status' => 'ok',
        ]);
    }

    private static function getRequestValue(Request $request, string $key, mixed $default = null): mixed
    {
        if ($request->has($key)) {
            return $request->input($key, $default);
        }

        return $request->query($key, $default);
    }

    /**
     * @return array<int, mixed>
     */
    private static function parseColumns(mixed $columns): array
    {
        if (is_array($columns)) {
            return array_values($columns);
        }

        if (is_string($columns) && $columns !== '') {
            $decoded = json_decode($columns, true);

            return is_array($decoded) ? array_values($decoded) : [];
        }

        return [];
    }

    private static function sanitizeField(string $field, string $default): string
    {
        $pattern = (string) config('rwtable.security.allowed_field_pattern', '/^[A-Za-z0-9_\\.]+$/');

        if ($field !== '' && preg_match($pattern, $field) === 1) {
            return $field;
        }

        return $default;
    }

    private static function resolveColumn(string $table, string $field): ?string
    {
        $field = self::sanitizeField($field, '');

        if ($field === '') {
            return null;
        }

        /** @var array<string, string> $aliasToColumn */
        $aliasToColumn = (array) config('rwtable.field_aliases', []);

        if (array_key_exists($field, $aliasToColumn)) {
            return self::sanitizeField($aliasToColumn[$field], "{$table}.id");
        }

        if (str_contains($field, '.')) {
            $shortField = Str::afterLast($field, '.');

            if (str_starts_with($field, "{$table}.") && array_key_exists($shortField, $aliasToColumn)) {
                return self::sanitizeField($aliasToColumn[$shortField], "{$table}.id");
            }

            return self::sanitizeField($field, "{$table}.id");
        }

        return "{$table}.{$field}";
    }

    private static function safeParseDate(string $date): ?Carbon
    {
        try {
            return Carbon::createFromFormat('Y-m-d', $date);
        } catch (\Throwable) {
            return null;
        }
    }

    private static function applyFilter(Builder $query, string $column, string $filterType, string $mode, mixed $value): void
    {
        $method = $filterType === 'date' ? 'whereDate' : 'where';

        switch ($mode) {
            case '!=':
                $query->{$method}($column, '!=', $value);
                break;
            case 'bevat':
                $query->where($column, 'like', "%{$value}%");
                break;
            case 'bevat niet':
                $query->where($column, 'not like', "%{$value}%");
                break;
            case '>':
                $query->{$method}($column, '>', $value);
                break;
            case '<':
                $query->{$method}($column, '<', $value);
                break;
            case '=':
            default:
                $query->{$method}($column, '=', $value);
                break;
        }
    }

    /**
     * @param  class-string<Model>  $modelClass
     */
    private static function computeInsertAboveIndex(
        string $modelClass,
        string $orderField,
        int|string $insertAboveId,
        string $idKey = 'id'
    ): int {
        $target = $modelClass::query()->where($idKey, $insertAboveId)->firstOrFail();
        $targetIndex = $target->getAttribute($orderField);

        if ($targetIndex === null) {
            self::rebalanceOrdering($modelClass, $orderField, $idKey);
            $target->refresh();
            $targetIndex = $target->getAttribute($orderField) ?? 0;
        }

        $previous = $modelClass::query()
            ->where($orderField, '<', $targetIndex)
            ->orderBy($orderField, 'desc')
            ->first();

        $previousIndex = $previous?->getAttribute($orderField);

        if ($previousIndex === null) {
            return (int) $targetIndex - 1000;
        }

        $gap = (int) $targetIndex - (int) $previousIndex;

        if ($gap <= 1) {
            self::rebalanceOrdering($modelClass, $orderField, $idKey);
            $target = $modelClass::query()->where($idKey, $insertAboveId)->firstOrFail();
            $targetIndex = (int) $target->getAttribute($orderField);

            $previous = $modelClass::query()
                ->where($orderField, '<', $targetIndex)
                ->orderBy($orderField, 'desc')
                ->first();

            $previousIndex = $previous?->getAttribute($orderField) ?? ($targetIndex - 1000);
            $gap = $targetIndex - $previousIndex;
        }

        return (int) ($previousIndex + intdiv($gap, 2));
    }

    /**
     * @param  class-string<Model>  $modelClass
     */
    private static function rebalanceOrdering(string $modelClass, string $orderField, string $idKey = 'id'): void
    {
        $rows = $modelClass::query()
            ->orderBy($orderField)
            ->orderBy($idKey)
            ->get([$idKey, $orderField]);

        $value = 1000;

        foreach ($rows as $row) {
            $row->forceFill([$orderField => $value])->save();
            $value += 1000;
        }
    }

    private static function rulesContain(mixed $rules, string $needle): bool
    {
        if (is_array($rules)) {
            foreach ($rules as $rule) {
                if (is_string($rule)) {
                    foreach (explode('|', $rule) as $part) {
                        if (self::ruleName($part) === $needle) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        if (is_string($rules)) {
            foreach (explode('|', $rules) as $part) {
                if (self::ruleName($part) === $needle) {
                    return true;
                }
            }
        }

        return false;
    }

    private static function ruleName(string $rule): string
    {
        return trim(strtolower(explode(':', $rule, 2)[0]));
    }
}

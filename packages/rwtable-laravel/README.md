# rudiwer/rwtable-laravel

Reusable Laravel backend package for RWTable.

This package provides:

- table data processing action (`RwTableAction`) for Inertia pages,
- persisted chart configurations,
- persisted excel export configurations,
- route registration,
- translation namespace loading and publish support.

Monorepo split/release blueprint:

- `docs/rwtable-monorepo-release-blueprint.md`

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Routes](#routes)
5. [Request Contracts](#request-contracts)
6. [Controller Responses](#controller-responses)
7. [RwTableAction API](#rwtableaction-api)
8. [Server Mode Recipes (Managed vs Manual)](#server-mode-recipes-managed-vs-manual)
9. [Database Schema](#database-schema)
10. [Internationalization](#internationalization)
11. [Security Notes](#security-notes)
12. [Integration Example](#integration-example)
13. [Troubleshooting](#troubleshooting)

---

## Requirements

### Minimum supported versions (current package constraints)

| Layer                       | Minimum    |
| --------------------------- | ---------- |
| PHP                         | `8.3`      |
| Laravel                     | `13.0`     |
| `inertiajs/inertia-laravel` | `3.0 beta` |

Notes:

- Laravel 10 is **not** supported by the current package constraints.
- If your frontend uses RWTable Vue components, pair this package with Vue `3.4+`, `@inertiajs/vue3 2+`, and Tailwind CSS `3.2+` for intended styling.

From `composer.json`:

| Package                     | Version     |
| --------------------------- | ----------- |
| `php`                       | `^8.3`      |
| `illuminate/database`       | `^13.0`     |
| `illuminate/http`           | `^13.0`     |
| `illuminate/support`        | `^13.0`     |
| `inertiajs/inertia-laravel` | `^3.0@beta` |

---

## Installation

## Quick Start (production install)

```bash
composer require rudiwer/rwtable-laravel:^x.y
npm install @rudiwer/rwtable-vue@^x.y
php artisan vendor:publish --tag=rwtable-config --tag=rwtable-migrations --tag=rwtable-lang
php artisan migrate
```

Use matching major/minor versions for both packages (`x.y`).

## Advanced (local development install)

## Standard install

```bash
composer require rudiwer/rwtable-laravel
```

## Path install (local development)

Add a path repository in your app `composer.json`:

```json
{
  "repositories": [
    {
      "type": "path",
      "url": "../packages/rwtable-laravel",
      "options": { "symlink": true }
    }
  ]
}
```

Then require the package:

```bash
composer require rudiwer/rwtable-laravel:*
```

## Publish resources

```bash
php artisan vendor:publish --tag=rwtable-config
php artisan vendor:publish --tag=rwtable-migrations
php artisan vendor:publish --tag=rwtable-lang
```

Run migrations:

```bash
php artisan migrate
```

---

## Configuration

Published file: `config/rwtable.php`

```php
return [
    'routes' => [
        'enabled' => true,
        'prefix' => 'admin',
        'name_prefix' => 'admin.',
        'middleware' => ['web', 'auth'],
    ],

    'field_aliases' => [
        // optional alias map for filter/sort safety
        // 'status_description' => 'statuses.description',
    ],

    'security' => [
        'allowed_field_pattern' => '/^[A-Za-z0-9_\.]+$/',
    ],
];
```

### Config keys

| Key                              | Description                                             |
| -------------------------------- | ------------------------------------------------------- |
| `routes.enabled`                 | Enables/disables package route loading                  |
| `routes.prefix`                  | URI prefix for package routes                           |
| `routes.name_prefix`             | Route name prefix                                       |
| `routes.middleware`              | Middleware stack for package routes                     |
| `field_aliases`                  | Safe alias map used by `RwTableAction::resolveColumn()` |
| `security.allowed_field_pattern` | Regex whitelist for user-supplied field names           |

Practical full config example:

```php
return [
    'routes' => [
        'enabled' => true,
        'prefix' => 'admin',
        'name_prefix' => 'admin.',
        'middleware' => ['web', 'auth', 'verified'],
    ],
    'field_aliases' => [
        'status_label' => 'statuses.description',
        'priority_label' => 'priorities.description',
        'owner_name' => 'users.name',
    ],
    'security' => [
        'allowed_field_pattern' => '/^[A-Za-z0-9_\.]+$/',
    ],
];
```

---

## Routes

Routes are loaded from `routes/web.php` when `routes.enabled=true`.

| Method   | URI                                   | Name                       | Controller                        |
| -------- | ------------------------------------- | -------------------------- | --------------------------------- |
| `GET`    | `/rw-table-charts/{tableIdentifier}`  | `rw-table-charts.index`    | `RwTableChartController@index`    |
| `POST`   | `/rw-table-charts/{tableIdentifier}`  | `rw-table-charts.store`    | `RwTableChartController@store`    |
| `DELETE` | `/rw-table-charts/{id}`               | `rw-table-charts.destroy`  | `RwTableChartController@destroy`  |
| `GET`    | `/rw-table-exports/{tableIdentifier}` | `rw-table-exports.index`   | `RwTableExportController@index`   |
| `POST`   | `/rw-table-exports/{tableIdentifier}` | `rw-table-exports.store`   | `RwTableExportController@store`   |
| `DELETE` | `/rw-table-exports/{id}`              | `rw-table-exports.delete`  | `RwTableExportController@destroy` |
| `DELETE` | `/rw-table-exports/{id}/destroy`      | `rw-table-exports.destroy` | `RwTableExportController@destroy` |

All routes are user-scoped (authenticated user only).

---

## Request Contracts

## `StoreRwTableExportRequest`

```json
{
  "id": "nullable|integer|exists:rw_table_exports,id",
  "description": "required|string|max:255",
  "config": "required|array"
}
```

## `StoreRwTableChartRequest`

Core fields:

```json
{
  "id": "nullable|integer|exists:rw_table_charts,id",
  "description": "required|string|max:255",
  "config": "required|array"
}
```

The chart request accepts both:

- builder-oriented keys (`config.builder.dataset.*`, `config.builder.chart.*`, `config.builder.presentation.*`),
- legacy keys (`config.xAxis`, `config.yAxis`, `config.seriesField`, `config.type`, etc.).

Allowed chart types:

- `bar`, `line`, `pie`, `doughnut`,
- `bar3d`, `line3d`,
- `bar3d_webgl`, `line3d_webgl`.

Practical chart payload (all common fields):

```json
{
  "id": 12,
  "description": "Registrations by school year",
  "config": {
    "builder": {
      "dataset": {
        "x_field": "school_year",
        "metric_field": "amount",
        "aggregate": "sum",
        "series_field": "status",
        "limit": 25,
        "sort_direction": "desc"
      },
      "chart": {
        "type": "bar",
        "orientation": "vertical",
        "stacked": false,
        "show_legend": true
      },
      "presentation": {
        "allow_chart_type_change": true
      }
    },
    "xAxis": "school_year",
    "yAxis": "amount",
    "operation": "sum",
    "seriesField": "status",
    "series": ["todo", "in_progress", "done"],
    "type": "bar",
    "orientation": "vertical",
    "stacked": false,
    "showLegend": true,
    "allowViewerChartTypeChange": true,
    "limit": 25,
    "sortDirection": "desc"
  }
}
```

Practical export payload (all common fields):

```json
{
  "id": 9,
  "description": "Active registrations export",
  "config": {
    "columns": [
      {
        "key": "id",
        "label": "ID",
        "selected": true,
        "width": 80
      },
      {
        "key": "name",
        "label": "Name",
        "selected": true,
        "width": 220
      },
      {
        "key": "status",
        "label": "Status",
        "selected": true,
        "width": 140
      },
      {
        "key": "created_at",
        "label": "Created at",
        "selected": false,
        "width": 180
      }
    ],
    "includeHeader": true,
    "fileName": "registrations-active"
  }
}
```

---

## Controller Responses

## Charts

```json
// index
{ "charts": [ { "id": 1, "description": "...", "config": {...} } ] }

// store
{ "message": "...", "chart": { "id": 1, "description": "...", "config": {...} } }

// destroy
{ "message": "..." }
```

## Exports

```json
// index
{ "exports": [ { "id": 1, "description": "...", "config": [...] } ] }

// store
{ "message": "...", "export": { "id": 1, "description": "...", "config": [...] } }

// destroy
{ "message": "..." }
```

Validation failures return HTTP `422` with Laravel validation payload.

---

## RwTableAction API

`RwTableAction` is the central reusable backend helper.

## `handle(Request $request, string $modelClass, string $viewComponent, array $globalFields = ['id'], int $perPageDefault = 25, array $extraProps = [], ?callable $queryCallback = null): Inertia\Response`

Supports:

- global search,
- typed filtering (`text`, `number`, `date`, `datetime`),
- filter modes (`=`, `!=`, `contains`, `contains not`, `>`, `<`),
- selection filtering (`none`, `exclude`, `only`),
- pagination,
- sorting,
- manual ordering mode.

Practical `handle` request payload (all key arrays):

```json
{
  "page": 1,
  "rowsPerPage": 25,
  "sortField": "title",
  "sortOrder": "asc",
  "global": "school",
  "columns": [
    { "key": "id", "selected": true, "label": "ID" },
    { "key": "title", "selected": true, "label": "Title" },
    { "key": "status", "selected": true, "label": "Status" }
  ],
  "filters": {
    "status": "todo",
    "title": "project",
    "created_at": { "from": "2026-01-01", "to": "2026-12-31" }
  },
  "filterModes": {
    "status": "=",
    "title": "contains",
    "created_at": "between"
  },
  "filterTypes": {
    "status": "text",
    "title": "text",
    "created_at": "date"
  },
  "selectionFilter": "exclude",
  "selectedRowIds": [12, 14],
  "manualOrdering": 0,
  "manualOrderField": "sort_index"
}
```

## `update(Request $request, string $modelClass, int|string $id, array $editableFields = [], string $idKey = 'id'): JsonResponse`

Supports:

- `validationType` = `model` or `client`,
- primary field update,
- `extraUpdates` array,
- `extraValidationRules` map,
- user-friendly localized backend messages.

Practical `update` payload with full arrays:

```json
{
  "field": "product_id",
  "value": 0,
  "validationType": "client",
  "validationRules": "nullable|integer|min:0",
  "extraUpdates": [
    { "field": "title", "value": "Custom product title" },
    { "field": "status", "value": "todo" },
    { "field": "tags", "value": ["backend", "urgent"] }
  ],
  "extraValidationRules": {
    "title": "required|string|max:120",
    "status": "required|in:todo,in_progress,done",
    "tags": "nullable|array",
    "tags.*": "string|in:todo,backend,frontend,security,urgent,nice_to_have"
  }
}
```

## `create(Request $request, string $modelClass, array $editableFields = [], array $defaults = [], string $idKey = 'id'): JsonResponse`

Supports:

- model/client validation,
- defaults merge,
- manual ordering,
- optional insert-above logic with automatic rebalance.

Practical `create` payload with all common fields:

```json
{
  "product_id": 2,
  "title": "Created from inline row",
  "owner": "Admin",
  "status": "todo",
  "priority": "medium",
  "is_active": true,
  "notes": "Created in RWTable sandbox",
  "tags": ["frontend", "nice_to_have"],
  "sort_index": 3000,
  "validationType": "model",
  "validationRules": {
    "title": "required|string|max:120"
  },
  "manualOrdering": true,
  "manualOrderField": "sort_index",
  "insertAboveId": 25
}
```

## `destroy(Request $request, string $modelClass, int|string $id, string $idKey = 'id'): JsonResponse`

Deletes by id.

## `reindexOrdering(string $modelClass, string $orderField = 'index', string $idKey = 'id'): JsonResponse`

Rebalances ordering with gap strategy (`1000` increments).

---

## Server Mode Recipes (Managed vs Manual)

Use one of the two proven backend patterns below.

### Recipe A: Managed mode backend (recommended)

Use `RwTableAction::handle()` for data retrieval and keep controller code compact.

```php
use App\Actions\Admin\Base\RwTableAction;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Response;

public function index(Request $request): Response
{
    return RwTableAction::handle(
        $request,
        Task::class,
        'Admin/Task/Index',
        ['id', 'title', 'status'],
        25,
        ['statusOptions' => $this->statusOptions()],
        function ($query): void {
            $query->where('school_id', auth()->user()->school_id);
        }
    );
}
```

Client side usually uses:

- `managed=true`
- `dataSource` (`axios` or `inertia`)
- optional infinite mode without extra parent merge logic.

### Recipe B: Manual mode backend (`serverSide=true`)

In this setup, parent frontend handles `@change` and calls your endpoint. Backend returns normalized pagination payload.

```php
use App\Models\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

public function data(Request $request): JsonResponse
{
    $query = Task::query();

    $global = trim((string) $request->input('global', ''));

    if ($global !== '') {
        $query->where(function ($builder) use ($global): void {
            $builder
                ->orWhere('title', 'like', "%{$global}%")
                ->orWhere('owner', 'like', "%{$global}%")
                ->orWhere('status', 'like', "%{$global}%");
        });
    }

    $sortField = (string) $request->input('sortField', 'id');
    $sortOrder = strtolower((string) $request->input('sortOrder', 'asc')) === 'desc' ? 'desc' : 'asc';
    $perPage = max(1, min(100, (int) $request->input('rowsPerPage', 25)));
    $page = max(1, (int) $request->input('page', 1));

    $paginated = $query
        ->orderBy($sortField, $sortOrder)
        ->paginate($perPage, ['*'], 'page', $page);

    return response()->json([
        'data' => $paginated->items(),
        'total' => $paginated->total(),
        'current_page' => $paginated->currentPage(),
        'last_page' => $paginated->lastPage(),
    ]);
}
```

Manual mode best-practice notes:

- Keep payload keys compatible with RWTable `paramMap`.
- For infinite scroll, frontend parent must append/merge rows when page increases.
- Backend should still return full pagination metadata (`total`, `current_page`, `last_page`).

---

## Database Schema

## `rw_table_charts`

- `id`
- `user_id` (nullable FK, `nullOnDelete`)
- `table_identifier` (indexed)
- `description`
- `config` (json, nullable)
- timestamps
- unique: `(user_id, table_identifier, description)`

## `rw_table_exports`

- `id`
- `user_id` (nullable FK, `nullOnDelete`)
- `table_identifier` (indexed)
- `description`
- `config` (json)
- timestamps
- unique: `(user_id, table_identifier, description)`

---

## Internationalization

Translations are loaded under namespace `rwtable`.

In service provider:

- `loadTranslationsFrom(__DIR__.'/../lang', 'rwtable')`

Published override path:

```text
lang/vendor/rwtable/{locale}/rwtable.php
```

Shipped locales:

- `en`
- `nl`
- `fr`
- `de`

---

## Security Notes

Key protections built into the package:

- route-level auth middleware by default,
- user scoping for chart/export persistence,
- field-name regex whitelist via `allowed_field_pattern`,
- optional server alias map for safe resolved columns,
- validation type and rules enforcement in update/create actions,
- `firstOrFail` ownership checks on mutable resources.

Recommended:

- keep route middleware strict,
- always provide `editableFields` in `update/create` wrappers,
- avoid exposing unrestricted model attributes.

---

## Integration Example

```php
use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Rwsoft\RwTableLaravel\Actions\RwTableAction;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        return RwTableAction::handle(
            $request,
            Task::class,
            'Admin/Task/Index',
            ['id', 'title', 'status'],
            25,
            ['statuses' => []]
        );
    }

    public function inlineUpdate(Request $request, int $id)
    {
        return RwTableAction::update(
            $request,
            Task::class,
            $id,
            ['title', 'status', 'priority', 'tags']
        );
    }

    public function inlineCreate(Request $request)
    {
        return RwTableAction::create(
            $request,
            Task::class,
            ['title', 'status', 'priority', 'tags', 'index']
        );
    }

    public function inlineDelete(Request $request, int $id)
    {
        return RwTableAction::destroy($request, Task::class, $id);
    }
}
```

---

## Troubleshooting

## Routes not available

- check `config/rwtable.php` -> `routes.enabled`
- clear caches: `php artisan optimize:clear`

## 403 from chart/export endpoints

- ensure user is authenticated
- confirm route middleware includes `auth`

## 422 during inline update/create

- check `validationType`
- ensure `validationRules` are passed for client validation
- ensure model has `rules($id)` for model validation path

## SQL/column errors in filtering/sorting

- use `field_aliases` for derived/related fields
- ensure incoming fields satisfy `allowed_field_pattern`

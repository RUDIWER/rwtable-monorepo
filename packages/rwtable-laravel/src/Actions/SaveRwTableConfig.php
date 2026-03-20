<?php

namespace Rwsoft\RwTableLaravel\Actions;

use Illuminate\Database\Eloquent\Model;

class SaveRwTableConfig
{
    /**
     * @param  class-string<Model>  $modelClass
     * @param  array{description:string,config:array<mixed>}  $data
     */
    public function execute(
        string $modelClass,
        array $data,
        string $tableIdentifier,
        int|string $userId,
        int|string|null $id = null
    ): Model {
        if ($id !== null) {
            $configModel = $modelClass::query()
                ->where('id', $id)
                ->where('user_id', $userId)
                ->firstOrFail();

            $configModel->update([
                'description' => $data['description'],
                'config' => $data['config'],
            ]);

            return $configModel;
        }

        return $modelClass::query()->create([
            'user_id' => $userId,
            'table_identifier' => $tableIdentifier,
            'description' => $data['description'],
            'config' => $data['config'],
        ]);
    }
}

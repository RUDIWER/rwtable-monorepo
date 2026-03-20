<?php

namespace Rwsoft\RwTableLaravel\Actions;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class GetRwTableConfig
{
    /**
     * @param  class-string<Model>  $modelClass
     */
    public function execute(string $modelClass, string $tableIdentifier, int|string $userId): Collection
    {
        return $modelClass::query()
            ->where('table_identifier', $tableIdentifier)
            ->where('user_id', $userId)
            ->orderBy('description')
            ->get();
    }
}

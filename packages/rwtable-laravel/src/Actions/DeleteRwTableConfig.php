<?php

namespace Rwsoft\RwTableLaravel\Actions;

use Illuminate\Database\Eloquent\Model;

class DeleteRwTableConfig
{
    /**
     * @param  class-string<Model>  $modelClass
     */
    public function execute(string $modelClass, int|string $id, int|string $userId): bool
    {
        $configModel = $modelClass::query()
            ->where('id', $id)
            ->where('user_id', $userId)
            ->firstOrFail();

        return (bool) $configModel->delete();
    }
}

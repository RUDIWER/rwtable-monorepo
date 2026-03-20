<?php

namespace Rwsoft\RwTableLaravel\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RwTableExport extends Model
{
    use HasFactory;

    protected $table = 'rw_table_exports';

    protected $fillable = [
        'user_id',
        'table_identifier',
        'description',
        'config',
    ];

    protected $casts = [
        'config' => 'array',
    ];

    public function user(): BelongsTo
    {
        /** @var class-string<Model> $userModel */
        $userModel = config('auth.providers.users.model', User::class);

        return $this->belongsTo($userModel);
    }
}

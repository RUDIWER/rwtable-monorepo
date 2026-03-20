<?php

namespace Rwsoft\RwTableLaravel\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRwTableExportRequest extends FormRequest
{
    public function authorize(): bool
    {
        return (bool) $this->user();
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'description' => ['required', 'string', 'max:255'],
            'config' => ['required', 'array'],
            'id' => ['nullable', 'integer', 'exists:rw_table_exports,id'],
        ];
    }
}

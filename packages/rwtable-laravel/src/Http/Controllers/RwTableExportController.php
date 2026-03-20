<?php

namespace Rwsoft\RwTableLaravel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Rwsoft\RwTableLaravel\Actions\DeleteRwTableConfig;
use Rwsoft\RwTableLaravel\Actions\GetRwTableConfig;
use Rwsoft\RwTableLaravel\Actions\SaveRwTableConfig;
use Rwsoft\RwTableLaravel\Http\Requests\StoreRwTableExportRequest;
use Rwsoft\RwTableLaravel\Models\RwTableExport;

class RwTableExportController extends Controller
{
    public function index(Request $request, string $tableIdentifier, GetRwTableConfig $action): JsonResponse
    {
        $userId = $request->user()?->getAuthIdentifier();

        abort_if($userId === null, 403);

        $exports = $action->execute(RwTableExport::class, $tableIdentifier, $userId);

        return response()->json([
            'exports' => $exports,
        ]);
    }

    public function store(StoreRwTableExportRequest $request, string $tableIdentifier, SaveRwTableConfig $action): JsonResponse
    {
        $userId = Auth::id();

        abort_if($userId === null, 403);

        $validated = $request->validated();

        $export = $action->execute(
            RwTableExport::class,
            [
                'description' => $validated['description'],
                'config' => $validated['config'],
            ],
            $tableIdentifier,
            $userId,
            $validated['id'] ?? null
        );

        return response()->json([
            'message' => __('rwtable::rwtable.backend.messages.export_saved'),
            'export' => $export,
        ]);
    }

    public function destroy(Request $request, int $id, DeleteRwTableConfig $action): JsonResponse
    {
        $userId = $request->user()?->getAuthIdentifier();

        abort_if($userId === null, 403);

        $action->execute(RwTableExport::class, $id, $userId);

        return response()->json([
            'message' => __('rwtable::rwtable.backend.messages.export_deleted'),
        ]);
    }
}

<?php

namespace Rwsoft\RwTableLaravel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Rwsoft\RwTableLaravel\Http\Requests\StoreRwTableChartRequest;
use Rwsoft\RwTableLaravel\Models\RwTableChart;

class RwTableChartController extends Controller
{
    public function index(Request $request, string $tableIdentifier): JsonResponse
    {
        $userId = $request->user()?->getAuthIdentifier();

        abort_if($userId === null, 403);

        $charts = RwTableChart::query()
            ->where('table_identifier', $tableIdentifier)
            ->where('user_id', $userId)
            ->orderBy('description')
            ->get();

        return response()->json([
            'charts' => $charts,
        ]);
    }

    public function store(StoreRwTableChartRequest $request, string $tableIdentifier): JsonResponse
    {
        $userId = Auth::id();

        abort_if($userId === null, 403);

        $validated = $request->validated();

        if (! empty($validated['id'])) {
            $chart = RwTableChart::query()
                ->where('id', $validated['id'])
                ->where('user_id', $userId)
                ->firstOrFail();

            $chart->update([
                'description' => $validated['description'],
                'config' => $validated['config'],
            ]);
        } else {
            $chart = RwTableChart::query()->create([
                'user_id' => $userId,
                'table_identifier' => $tableIdentifier,
                'description' => $validated['description'],
                'config' => $validated['config'],
            ]);
        }

        return response()->json([
            'message' => __('rwtable::rwtable.backend.messages.chart_saved'),
            'chart' => $chart,
        ]);
    }

    public function destroy(Request $request, int $id): JsonResponse
    {
        $userId = $request->user()?->getAuthIdentifier();

        abort_if($userId === null, 403);

        $chart = RwTableChart::query()
            ->where('id', $id)
            ->where('user_id', $userId)
            ->firstOrFail();

        $chart->delete();

        return response()->json([
            'message' => __('rwtable::rwtable.backend.messages.chart_deleted'),
        ]);
    }
}

<?php

use Illuminate\Support\Facades\Route;
use Rwsoft\RwTableLaravel\Http\Controllers\RwTableChartController;
use Rwsoft\RwTableLaravel\Http\Controllers\RwTableExportController;

$middleware = (array) config('rwtable.routes.middleware', ['web', 'auth']);
$prefix = (string) config('rwtable.routes.prefix', 'admin');
$namePrefix = (string) config('rwtable.routes.name_prefix', 'admin.');

Route::middleware($middleware)
    ->prefix($prefix)
    ->name($namePrefix)
    ->group(function (): void {
        Route::get('/rw-table-charts/{tableIdentifier}', [RwTableChartController::class, 'index'])->name('rw-table-charts.index');
        Route::post('/rw-table-charts/{tableIdentifier}', [RwTableChartController::class, 'store'])->name('rw-table-charts.store');
        Route::delete('/rw-table-charts/{id}', [RwTableChartController::class, 'destroy'])->name('rw-table-charts.destroy');

        Route::get('/rw-table-exports/{tableIdentifier}', [RwTableExportController::class, 'index'])->name('rw-table-exports.index');
        Route::post('/rw-table-exports/{tableIdentifier}', [RwTableExportController::class, 'store'])->name('rw-table-exports.store');
        Route::delete('/rw-table-exports/{id}', [RwTableExportController::class, 'destroy'])->name('rw-table-exports.delete');
        Route::delete('/rw-table-exports/{id}/destroy', [RwTableExportController::class, 'destroy'])->name('rw-table-exports.destroy');
    });

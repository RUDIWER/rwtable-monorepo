<?php

namespace Rwsoft\RwTableLaravel;

use Illuminate\Support\ServiceProvider;

class RwTableLaravelServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__.'/../config/rwtable.php', 'rwtable');
    }

    public function boot(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        $this->loadTranslationsFrom(__DIR__.'/../lang', 'rwtable');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/rwtable.php' => config_path('rwtable.php'),
            ], 'rwtable-config');

            $this->publishes([
                __DIR__.'/../lang' => $this->app->langPath('vendor/rwtable'),
            ], 'rwtable-lang');

            $this->publishesMigrations([
                __DIR__.'/../database/migrations/' => database_path('migrations'),
            ], 'rwtable-migrations');
        }

        if ((bool) config('rwtable.routes.enabled', true)) {
            $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        }
    }
}

<?php

namespace Rwsoft\RwTableLaravel\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRwTableChartRequest extends FormRequest
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
        $chartTypes = [
            'bar',
            'line',
            'pie',
            'doughnut',
            'bar3d',
            'line3d',
            'bar3d_webgl',
            'line3d_webgl',
        ];

        $aggregateModes = ['count', 'sum', 'avg', 'min', 'max'];

        return [
            'description' => ['required', 'string', 'max:255'],
            'config' => ['required', 'array'],
            'id' => ['nullable', 'integer', 'exists:rw_table_charts,id'],

            'config.version' => ['nullable', 'integer', 'min:1'],

            'config.builder' => ['sometimes', 'array'],
            'config.builder.dataset' => ['sometimes', 'array'],
            'config.builder.dataset.x_field' => ['nullable', 'string', 'max:255'],
            'config.builder.dataset.metric_field' => ['nullable', 'string', 'max:255'],
            'config.builder.dataset.series_field' => ['nullable', 'string', 'max:255'],
            'config.builder.dataset.aggregate' => [
                'nullable',
                Rule::in($aggregateModes),
            ],
            'config.builder.dataset.limit' => ['nullable', 'integer', 'min:1', 'max:500'],
            'config.builder.dataset.sort_direction' => ['nullable', Rule::in(['asc', 'desc'])],

            'config.builder.chart' => ['sometimes', 'array'],
            'config.builder.chart.type' => ['nullable', Rule::in($chartTypes)],
            'config.builder.chart.orientation' => ['nullable', Rule::in(['vertical', 'horizontal'])],
            'config.builder.chart.stacked' => ['nullable', 'boolean'],
            'config.builder.chart.show_legend' => ['nullable', 'boolean'],

            'config.builder.presentation' => ['sometimes', 'array'],
            'config.builder.presentation.allow_chart_type_change' => ['nullable', 'boolean'],

            'config.xAxis' => ['nullable', 'string', 'max:255'],
            'config.yAxis' => ['nullable', 'string', 'max:255'],
            'config.seriesField' => ['nullable', 'string', 'max:255'],
            'config.series' => ['nullable', 'string', 'max:255'],
            'config.operation' => ['nullable', Rule::in($aggregateModes)],
            'config.type' => ['nullable', Rule::in($chartTypes)],
            'config.orientation' => ['nullable', Rule::in(['vertical', 'horizontal'])],
            'config.stacked' => ['nullable', 'boolean'],
            'config.showLegend' => ['nullable', 'boolean'],
            'config.allowViewerChartTypeChange' => ['nullable', 'boolean'],
            'config.allow_chart_type_change' => ['nullable', 'boolean'],
            'config.limit' => ['nullable', 'integer', 'min:1', 'max:500'],
            'config.sortDirection' => ['nullable', Rule::in(['asc', 'desc'])],
        ];
    }
}

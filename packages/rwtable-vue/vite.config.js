import vue from '@vitejs/plugin-vue';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'RwTableVue',
            formats: ['es', 'cjs'],
            fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
        },
        sourcemap: true,
        emptyOutDir: true,
        rollupOptions: {
            external: [
                'vue',
                '@inertiajs/vue3',
                'lodash',
                'echarts',
                'echarts-gl',
                'exceljs',
                'html2pdf.js',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});

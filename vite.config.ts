import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vite.dev/config/

export default defineConfig({
    base: './',
    plugins: [react()],
    define: {
        '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
    },
    build: {
        rollupOptions: {
            input: {
                popup: 'index.html',
                "service-worker": 'src/service-worker.ts',
                // content: 'src/content.ts',
            },
            output: {
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            }
        }
    }
})

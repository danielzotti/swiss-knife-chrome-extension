import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vite.dev/config/

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {

      input: {
        popup: 'index.html',
        // background: 'src/background.ts',
        // content: 'src/content.ts',
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    }
  }
})

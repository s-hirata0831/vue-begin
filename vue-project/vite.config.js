import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // path モジュールをインポート

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/vue-begin/' : '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true, // History API fallback を有効化 (History モード用)
  },
})
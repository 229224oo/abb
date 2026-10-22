import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './',  // 相对路径，适配任意部署位置（GitHub Pages子路径等）
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true  // 放行所有公网隧道域名（localtunnel/serveo等）
  }
})

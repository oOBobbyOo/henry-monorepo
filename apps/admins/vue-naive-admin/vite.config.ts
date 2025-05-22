import type { ImportMetaEnv } from '@henry/types'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { setupVitePlugins } from './build/plugins'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根路径
  const root = process.cwd()
  // 环境变量
  const viteEnv = loadEnv(mode, root) as unknown as ImportMetaEnv

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      port: 5173, // 默认端口 5173
      open: true, // 是否自动打开浏览器
      proxy: {
        '/api': {
          target: 'http://localhost:5173',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})

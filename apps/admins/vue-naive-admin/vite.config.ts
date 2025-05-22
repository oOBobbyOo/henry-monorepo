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
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      outDir: 'dist', // 指定打包输出目录，默认'./dist'
      assetsDir: 'assets', // 指定静态资源存放目录，默认'assets'
      minify: 'terser', // 压缩工具：'esbuild' | 'terser' | false，默认 'esbuild' 很快
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: false,
        },
      },
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-venders': ['vue', 'vue-router'],
          },
          entryFileNames: 'assets/js/[name]-[hash].js',
          chunkFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          experimentalMinChunkSize: 10 * 1024, // 单位b，合并较小的模块
        },
      },
    },
  }
})

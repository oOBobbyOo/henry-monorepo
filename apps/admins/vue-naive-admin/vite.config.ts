import process from 'node:process'
import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'

// @see https://github.com/antfu/unocss
import UnoCSS from 'unocss/vite'

// @see https://github.com/unplugin/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
// @see https://github.com/unplugin/unplugin-icons
import IconsResolver from 'unplugin-icons/resolver'

import Icons from 'unplugin-icons/vite'
// @see https://github.com/unplugin/unplugin-vue-components
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import Components from 'unplugin-vue-components/vite'

import { defineConfig, loadEnv } from 'vite'

// @see https://github.com/vbenjs/vite-plugin-mock
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根路径
  const root = process.cwd()
  // 获取环境变量
  const { VITE_MOCK_ENABLE } = loadEnv(mode, root)

  return {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      UnoCSS(),
      vue(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
            ],
          },
        ],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
      Components({
        resolvers: [
          NaiveUiResolver(),
          IconsResolver({
            componentPrefix: 'icon',
          }),
        ],
      }),
      Icons({
        autoInstall: true,
        compiler: 'vue3',
        scale: 1,
      }),
      viteMockServe({
        mockPath: 'mock', // 目录位置
        enable: Boolean(VITE_MOCK_ENABLE), // 是否启用 mock 功能
        watchFiles: true, // 将监视文件夹中的文件更改。 并实时同步到请求结果
        logger: true, // 是否在控制台显示请求日志
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 5173, // 默认端口
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

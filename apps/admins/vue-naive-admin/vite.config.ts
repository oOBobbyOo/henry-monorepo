import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'

// @see https://github.com/antfu/unocss
import UnoCSS from 'unocss/vite'

// @see https://github.com/unplugin/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

// @see https://github.com/unplugin/unplugin-vue-components
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
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
        resolvers: [NaiveUiResolver()],
      }),
    ],
  }
})

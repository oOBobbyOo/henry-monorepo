import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

import vue from '@vitejs/plugin-vue'

// @see https://github.com/antfu/unocss
import UnoCSS from 'unocss/vite'

// @see https://github.com/unplugin/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

// @see https://github.com/unplugin/unplugin-icons
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// @see https://github.com/unplugin/unplugin-vue-components
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'

// @see https://github.com/condorheroblog/vite-plugin-fake-server
import { vitePluginFakeServer } from 'vite-plugin-fake-server'

// @see https://github.com/vbenjs/vite-plugin-svg-icons
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根路径
  const root = process.cwd()
  // 获取环境变量
  const { VITE_MOCK_ENABLE, VITE_ICON_LOCAL_PREFIX, VITE_ICON_PREFIX } = loadEnv(mode, root)

  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '')
  const localIconPath = path.join(root, 'src/assets/svg-icons')

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
          IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFIX }),
        ],
      }),
      Icons({
        autoInstall: true,
        compiler: 'vue3',
        scale: 1,
        defaultClass: 'inline-block',
        customCollections: {
          [collectionName]: FileSystemIconLoader(localIconPath, svg =>
            svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')),
        },
      }),
      createSvgIconsPlugin({
        iconDirs: [localIconPath],
        symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
        inject: 'body-last',
        customDomId: '__SVG_ICON_LOCAL__',
      }),
      vitePluginFakeServer({
        include: 'mock',
        infixName: 'mock',
        enableDev: Boolean(VITE_MOCK_ENABLE),
        enableProd: Boolean(VITE_MOCK_ENABLE),
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

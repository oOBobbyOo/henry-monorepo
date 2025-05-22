import type { ImportMetaEnv } from '@henry/types'
import type { PluginOption } from 'vite'
import path from 'node:path'
import process from 'node:process'

// @see https://github.com/unplugin/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

// @see https://github.com/unplugin/unplugin-icons
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// @see https://www.naiveui.com/zh-CN/os-theme/docs/import-on-demand
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// @see https://github.com/unplugin/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'

// @see https://github.com/vbenjs/vite-plugin-svg-icons
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export function setupUnplugin(viteEnv: ImportMetaEnv) {
  const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv

  /** The path to the local icon */
  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icons')

  /** The name of the local icon collection */
  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '')

  const plugins: PluginOption[] = [
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
        enabled: false,
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
  ]

  return plugins
}

import type { ImportMetaEnv } from '@henry/types'
import type { PluginOption } from 'vite'

// @see https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
import vue from '@vitejs/plugin-vue'

// @see https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
import vueJsx from '@vitejs/plugin-vue-jsx'

import { setupCompressionPlugin } from './compression'
import { setupDevtoolsPlugin } from './devtools'
import { setupMockPlugin } from './mock'
import { setupUnoCSSPlugin } from './unocss'
import { setupUnplugin } from './unplugin'
import { setupVisualizerPlugin } from './visualizer'

export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins: PluginOption = [
    setupUnoCSSPlugin(),
    vue(),
    // For JSX / TSX support
    vueJsx(),
    ...setupUnplugin(viteEnv),
    setupCompressionPlugin(),
    setupDevtoolsPlugin(viteEnv),
    setupMockPlugin(viteEnv),
    setupVisualizerPlugin(viteEnv),
  ]

  return plugins
}

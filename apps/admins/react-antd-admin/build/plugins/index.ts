import type { ImportMetaEnv } from '@henry/types'
import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

// @see https://github.com/vite-plugin/vite-plugin-dynamic-import
import dynamicImport from 'vite-plugin-dynamic-import'

import { setupUnoCSSPlugin } from './unocss'
import { setupUnplugin } from './unplugin'
import { setupVisualizerPlugin } from './visualizer'

export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins: PluginOption = [
    setupUnoCSSPlugin(),
    react(),
    dynamicImport(),
    ...setupUnplugin(viteEnv),
    setupVisualizerPlugin(viteEnv),
  ]

  return plugins
}

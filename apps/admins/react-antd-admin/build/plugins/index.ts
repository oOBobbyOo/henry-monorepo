import type { ImportMetaEnv } from '@henry/types'
import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'

import { setupUnoCSSPlugin } from './unocss'
import { setupVisualizerPlugin } from './visualizer'

export function setupVitePlugins(viteEnv: ImportMetaEnv) {
  const plugins: PluginOption = [
    setupUnoCSSPlugin(),
    react(),
    setupVisualizerPlugin(viteEnv),
  ]

  return plugins
}

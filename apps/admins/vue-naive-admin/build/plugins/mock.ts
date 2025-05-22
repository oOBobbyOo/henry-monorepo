import type { ImportMetaEnv } from '@henry/types'
import type { PluginOption } from 'vite'

// @see https://github.com/condorheroblog/vite-plugin-fake-server
import { vitePluginFakeServer } from 'vite-plugin-fake-server'

export function setupMockPlugin(viteEnv: ImportMetaEnv): PluginOption {
  const { VITE_APP_ENV, VITE_MOCK_ENABLE } = viteEnv
  const isDev = VITE_APP_ENV === 'dev'

  return vitePluginFakeServer({
    include: 'mock',
    infixName: 'mock',
    enableDev: isDev,
    enableProd: Boolean(VITE_MOCK_ENABLE),
  })
}

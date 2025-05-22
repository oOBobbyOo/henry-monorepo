import type { ImportMetaEnv } from '@henry/types'

// @see https://github.com/vuejs/devtools
import VueDevtools from 'vite-plugin-vue-devtools'

// @see https://devtools.vuejs.org/guide/vite-plugin
export function setupDevtoolsPlugin(viteEnv: ImportMetaEnv) {
  const { VITE_APP_ENV } = viteEnv
  const isDev = VITE_APP_ENV === 'dev'

  return isDev && VueDevtools({
    launchEditor: 'code',
  })
}

import type { PluginOption } from 'vite'

// @see https://github.com/antfu/unocss
import UnoCSS from 'unocss/vite'

// @see https://unocss.dev/integrations/vite
export function setupUnoCSSPlugin(): PluginOption {
  return UnoCSS()
}

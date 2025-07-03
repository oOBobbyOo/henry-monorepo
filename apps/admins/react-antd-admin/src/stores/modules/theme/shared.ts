import type { ConfigProviderProps } from 'antd'
import { themeSettings } from '@/theme/settings'
import { theme as antdTheme } from 'antd'

/** Init theme settings */
export function initThemeSettings() {
  return themeSettings
}

/**
 * Get antd theme
 */
export function getAntdTheme() {
  const { defaultAlgorithm } = antdTheme

  const theme: ConfigProviderProps['theme'] = {
    algorithm: [defaultAlgorithm],
  }

  return theme
}

import type { ConfigProviderProps } from 'antd'
import { getThemeConfig } from '@/theme/config'
import { themeSettings } from '@/theme/settings'
import { theme as antdTheme } from 'antd'

/** Init theme settings */
export function initThemeSettings() {
  return themeSettings
}

/**
 * Get antd theme
 */
export function getAntdTheme(darkMode: boolean) {
  const { defaultAlgorithm, darkAlgorithm } = antdTheme

  const themeConfig = getThemeConfig(darkMode)

  const theme: ConfigProviderProps['theme'] = {
    algorithm: [darkMode ? darkAlgorithm : defaultAlgorithm],
    ...themeConfig,
  }

  return theme
}

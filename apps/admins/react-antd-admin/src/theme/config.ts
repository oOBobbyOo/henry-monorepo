import type { ThemeConfig } from 'antd'
import { themeSettings } from './settings'

const lightTheme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: 'rgb(255, 255, 255)',
      footerBg: 'rgb(255, 255, 255)',
      siderBg: 'rgb(255, 255, 255)',
      bodyBg: 'rgb(247, 250, 252)',
      headerHeight: themeSettings.header.height,
    },
  },
}

const darkTheme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: 'rgb(28, 28, 28)',
      footerBg: 'rgb(28, 28, 28)',
      siderBg: 'rgb(28, 28, 28)',
      bodyBg: 'rgb(18, 18, 18)',
      headerHeight: themeSettings.header.height,
    },
  },
}

export function getThemeConfig(isDarkMode: boolean): ThemeConfig {
  return isDarkMode ? darkTheme : lightTheme
}

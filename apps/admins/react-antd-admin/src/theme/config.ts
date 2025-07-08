import type { ThemeConfig } from 'antd'

const lightTheme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: 'rgb(255, 255, 255)',
      footerBg: 'rgb(255, 255, 255)',
      siderBg: 'rgb(255, 255, 255)',
      bodyBg: 'rgb(247, 250, 252)',
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
    },
  },
}

export function getThemeConfig(isDarkMode: boolean): ThemeConfig {
  return isDarkMode ? darkTheme : lightTheme
}

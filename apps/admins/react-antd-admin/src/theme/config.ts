import type { ThemeConfig } from 'antd'

const lightTheme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: '#ffffff',
      footerBg: '#ffffff',
      siderBg: '#ffffff',
    },
  },
}

const darkTheme: ThemeConfig = {
  components: {
    Layout: {
      headerBg: '#001529',
      footerBg: '#001529',
      siderBg: '#001529',
    },
  },
}

export function getThemeConfig(isDarkMode: boolean): ThemeConfig {
  return isDarkMode ? darkTheme : lightTheme
}

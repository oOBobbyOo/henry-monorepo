declare namespace Theme {
  /** Theme scheme */
  type ThemeScheme = 'light' | 'dark' | 'auto'

  interface ThemeSetting {
    /** Theme scheme */
    themeScheme: ThemeScheme
    /** Header */
    header: {
      /** Header height */
      height: number
    }
    /** Sider */
    sider: {
      /** Sider width */
      width: number
      /** Collapsed sider width */
      collapsedWidth: number
    }
  }
}

declare namespace Theme {
  /** Theme scheme */
  type ThemeScheme = 'light' | 'dark' | 'auto'

  interface ThemeSetting {
    /** Theme scheme */
    themeScheme: ThemeScheme
    /** grayscale mode */
    grayscale: boolean
    /** colour weakness mode */
    colourWeakness: boolean
    /** Theme color */
    themeColor: string
    /** Other color */
    otherColor: OtherColor
    /** Whether info color is followed by the primary color */
    isInfoFollowPrimary: boolean
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

  interface OtherColor {
    info: string
    success: string
    warning: string
    error: string
  }

  interface ThemeColor extends OtherColor {
    primary: string
  }

  type ThemeColorKey = keyof ThemeColor
}

declare namespace Theme {
  /** Theme scheme */
  type ThemeScheme = 'light' | 'dark' | 'auto'

  /** Theme layout mode */
  type ThemeLayoutMode = 'basic' | 'mobile'

  /** Theme tab mode */
  type ThemeTabMode = 'chrome' | 'button'

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
    /** Layout */
    layout: {
      /** Layout mode */
      mode: ThemeLayoutMode
    }
    /** Tab */
    tab: {
      /** Tab visible */
      visible: boolean
      /** Tab cache */
      cache: boolean
      /** Tab height */
      height: number
      /** Tab mode */
      mode: ThemeTabMode
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

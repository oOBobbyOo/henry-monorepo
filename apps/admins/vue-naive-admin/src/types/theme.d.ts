declare namespace Theme {
  /** Theme scheme */
  type ThemeScheme = 'light' | 'dark' | 'auto'

  /** Theme layout mode */
  type ThemeLayoutMode = 'basic' | 'mobile'

  /** Theme tab mode */
  type ThemeTabMode = 'chrome' | 'button'

  /** Theme animate mode */
  type ThemeAnimateMode = 'fade' | 'fade-slide' | 'fade-bottom' | 'fade-scale' | 'zoom-fade' | 'zoom-out' | 'none'

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
    /** Page */
    page: {
      /** Whether to show the page transition */
      animate: boolean
      /** Page animate mode */
      animateMode: ThemeAnimateMode
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

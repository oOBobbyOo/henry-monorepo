import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getThemeColors, getThemeSettings, setColourWeakness, setFooter, setGrayscale, setHeader, setIsInfoFollowPrimary, setPage, setThemeColors, setThemeScheme } from '@/stores/modules/theme/slice'
import { usePreferredDark } from '@henry/rhooks'
import { toggleHtmlClass } from '@henry/utils'
import { useEffect, useMemo } from 'react'

export function useThemeScheme() {
  const dispatch = useAppDispatch()
  const themeSettings = useAppSelector(getThemeSettings)
  const themeColors = useAppSelector(getThemeColors)

  const isDark = usePreferredDark()

  const darkMode = useMemo(() => {
    if (themeSettings.themeScheme === 'auto') {
      return isDark
    }
    return themeSettings.themeScheme === 'dark'
  }, [isDark, themeSettings.themeScheme])

  const changeThemeScheme = (theme: Theme.ThemeScheme) => {
    dispatch(setThemeScheme(theme))
  }

  const toggleThemeScheme = () => {
    const themeScheme = themeSettings.themeScheme
    if (themeScheme === 'auto') {
      changeThemeScheme(isDark ? 'light' : 'dark')
    }
    changeThemeScheme(themeScheme === 'dark' ? 'light' : 'dark')
  }

  const toggleDark = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const isAppearanceTransition
      = !!document.startViewTransition
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      toggleThemeScheme()
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )

    const transition = document.startViewTransition(async () => {
      toggleThemeScheme()
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: darkMode ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: darkMode
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }

  const toggleCssDarkMode = (darkMode: boolean) => {
    const DARK_CLASS = 'dark'
    const { add, remove } = toggleHtmlClass(DARK_CLASS)

    if (darkMode) {
      add()
    }
    else {
      remove()
    }
  }

  const toggleGrayscaleMode = (grayscaleMode = false) => {
    const GRAYSCALE_CLASS = 'grayscale'
    const { add, remove } = toggleHtmlClass(GRAYSCALE_CLASS)

    if (grayscaleMode) {
      add()
    }
    else {
      remove()
    }
  }

  const toggleColourWeaknessMode = (colourWeakness = false) => {
    const htmlElement = document.documentElement
    htmlElement.style.filter = colourWeakness ? 'invert(80%)' : ''
  }

  const changeGrayscale = (isGrayscale: boolean) => {
    toggleGrayscaleMode(isGrayscale)
    dispatch(setGrayscale(isGrayscale))
  }
  const changeColourWeakness = (isColourWeakness: boolean) => {
    toggleColourWeaknessMode(isColourWeakness)
    dispatch(setColourWeakness(isColourWeakness))
  }

  const changeIsInfoFollowPrimary = (isInfoFollowPrimary: boolean) => {
    dispatch(setIsInfoFollowPrimary(isInfoFollowPrimary))
  }

  const updateThemeColors = ({ color, key }: { color: string, key: Theme.ThemeColorKey }) => {
    dispatch(setThemeColors({ color, key }))
  }

  const changePage = (page: Partial<Theme.ThemeSetting['page']>) => {
    dispatch(setPage(page))
  }

  const changeHeader = (header: Partial<Theme.ThemeSetting['header']>) => {
    dispatch(setHeader(header))
  }

  const changeFooter = (footer: Partial<Theme.ThemeSetting['footer']>) => {
    dispatch(setFooter(footer))
  }

  useEffect(() => {
    toggleCssDarkMode(darkMode)
  }, [darkMode])

  return {
    themeSettings,
    themeScheme: themeSettings.themeScheme,
    themeColors,
    darkMode,
    toggleDark,
    changeThemeScheme,
    toggleThemeScheme,
    changeGrayscale,
    changeColourWeakness,
    changeIsInfoFollowPrimary,
    updateThemeColors,
    changePage,
    changeHeader,
    changeFooter,
  }
}

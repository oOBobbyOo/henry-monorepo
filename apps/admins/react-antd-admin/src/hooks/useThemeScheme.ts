import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getThemeSettings, setThemeScheme } from '@/stores/modules/theme/slice'
import { usePreferredDark } from '@henry/rhooks'
import { useEffect, useMemo } from 'react'

export function useThemeScheme() {
  const dispatch = useAppDispatch()
  const themeSettings = useAppSelector(getThemeSettings)

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
    const htmlElementClassList = document.documentElement.classList

    if (darkMode) {
      htmlElementClassList.add('dark')
    }
    else {
      htmlElementClassList.remove('dark')
    }
  }

  useEffect(() => {
    toggleCssDarkMode(darkMode)
  }, [darkMode])

  return {
    themeScheme: themeSettings.themeScheme,
    darkMode,
    toggleDark,
    changeThemeScheme,
    toggleThemeScheme,
    toggleCssDarkMode,
  }
}

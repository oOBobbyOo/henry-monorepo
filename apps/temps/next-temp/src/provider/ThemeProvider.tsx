'use client'

import type { ReactNode, RefObject } from 'react'
import { THEME_COLORS } from '@/constants'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { z } from 'zod'

const themeModeSchema = z.enum(['light', 'dark', 'auto'])
const resolvedThemeSchema = z.enum(['light', 'dark'])
const themeKey = 'theme'

type ThemeMode = z.infer<typeof themeModeSchema>
type ResolvedTheme = z.infer<typeof resolvedThemeSchema>

function getStoredThemeMode(): ThemeMode {
  try {
    const storedTheme = localStorage.getItem(themeKey)
    return themeModeSchema.parse(storedTheme)
  }
  catch {
    return 'auto'
  }
}

function setStoredThemeMode(theme: ThemeMode) {
  try {
    const parsedTheme = themeModeSchema.parse(theme)
    localStorage.setItem(themeKey, parsedTheme)
  }
  catch { }
}

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function updateThemeClass(themeMode: ThemeMode) {
  const root = document.documentElement
  root.classList.remove('light', 'dark', 'auto')
  const newTheme = themeMode === 'auto' ? getSystemTheme() : themeMode
  root.classList.add(newTheme)

  if (themeMode === 'auto') {
    root.classList.add('auto')
  }

  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      'content',
      newTheme === 'dark' ? THEME_COLORS.dark : THEME_COLORS.light,
    )
  }
}

function setupPreferredListener() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = () => updateThemeClass('auto')
  mediaQuery.addEventListener('change', handler)
  return () => mediaQuery.removeEventListener('change', handler)
}

function getNextTheme(current: ThemeMode): ThemeMode {
  const themes: Array<ThemeMode>
    = getSystemTheme() === 'dark'
      ? ['auto', 'light', 'dark']
      : ['auto', 'dark', 'light']
  return themes[(themes.indexOf(current) + 1) % themes.length]
}

interface ThemeContextProps {
  themeMode: ThemeMode
  resolvedTheme: RefObject<ResolvedTheme>
  setTheme: (theme: ThemeMode) => void
  toggleMode: () => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredThemeMode)
  const resolvedTheme = useRef<ResolvedTheme>('light')

  useEffect(() => {
    if (themeMode !== 'auto')
      return
    return setupPreferredListener()
  }, [themeMode])

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme') || 'auto'
      const validTheme = ['light', 'dark', 'auto'].includes(storedTheme)
        ? storedTheme
        : 'auto'

      if (validTheme === 'auto') {
        const autoTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light'
        document.documentElement.classList.add(autoTheme, 'auto')
        resolvedTheme.current = resolvedThemeSchema.parse(autoTheme)
      }
      else {
        document.documentElement.classList.add(validTheme)
        resolvedTheme.current = resolvedThemeSchema.parse(validTheme)
      }
    }
    catch {
      const autoTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      document.documentElement.classList.add(autoTheme, 'auto')
      resolvedTheme.current = resolvedThemeSchema.parse(autoTheme)
    }
  }, [])

  const setTheme = (newTheme: ThemeMode) => {
    setThemeMode(newTheme)
    setStoredThemeMode(newTheme)
    updateThemeClass(newTheme)
  }

  const toggleMode = () => {
    setTheme(getNextTheme(themeMode))
  }

  return (
    <ThemeContext.Provider
      value={{ themeMode, resolvedTheme, setTheme, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

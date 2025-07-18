import { antdLocales } from '@/locales/antd'
import { getAntdTheme } from '@/stores/modules/theme/shared'
import { useMemo } from 'react'
import { useLang } from './useLang'
import { useThemeScheme } from './useThemeScheme'

export function useAntdTheme() {
  const { locale } = useLang()
  const { darkMode, themeColors } = useThemeScheme()

  const antdTheme = getAntdTheme(darkMode, themeColors)

  const antdLocale = useMemo(() => {
    return antdLocales[locale]
  }, [locale])

  return {
    antdTheme,
    antdLocale,
  }
}

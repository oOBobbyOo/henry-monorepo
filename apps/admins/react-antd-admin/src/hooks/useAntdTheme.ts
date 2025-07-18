import { antdLocales } from '@/locales/antd'
import { useAppSelector } from '@/stores/hook'
import { getAntdTheme } from '@/stores/modules/theme/shared'
import { themeColors } from '@/stores/modules/theme/slice'
import { useMemo } from 'react'
import { useLang } from './useLang'
import { useThemeScheme } from './useThemeScheme'

export function useAntdTheme() {
  const { locale } = useLang()
  const { darkMode } = useThemeScheme()

  const colors = useAppSelector(themeColors)

  const antdTheme = getAntdTheme(darkMode, colors)

  const antdLocale = useMemo(() => {
    return antdLocales[locale]
  }, [locale])

  return {
    antdTheme,
    antdLocale,
  }
}

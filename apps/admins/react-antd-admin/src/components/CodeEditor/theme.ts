import { useThemeScheme } from '@/hooks/useThemeScheme'
import * as cmThemes from '@uiw/codemirror-themes-all'
import { useMemo } from 'react'

type Theme = 'light' | 'dark' | keyof typeof cmThemes

function useCodeTheme(theme?: Theme) {
  const { darkMode } = useThemeScheme()

  // 获取当前使用的 CodeMirror 主题对象（只用于编辑器）
  const activeCmTheme = useMemo(() => {
    const themeName = theme || (darkMode ? 'vscodeDark' : 'vscodeLight')
    return cmThemes[themeName as keyof typeof cmThemes] || themeName
  }, [darkMode, theme])

  return {
    activeCmTheme,
  }
}

export { useCodeTheme }

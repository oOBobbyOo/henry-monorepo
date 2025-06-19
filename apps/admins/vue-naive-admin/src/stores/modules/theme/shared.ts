import { themeSettings } from '@/theme/settings'
import { createHoverColor, createPressedColor } from '@/utils/color'

/** Init theme settings */
export function initThemeSettings() {
  const isProd = import.meta.env.PROD

  if (!isProd)
    return themeSettings

  return themeSettings
}

/**
 * Get naive theme colors
 * @param colors Theme colors
 */
export function getNaiveThemeColors(colors: Theme.ThemeColor) {
  const colorActions: Naive.NaiveColorAction[] = [
    { scene: '', handler: color => color },
    { scene: 'Hover', handler: color => createHoverColor(color) },
    { scene: 'Pressed', handler: color => createPressedColor(color) },
  ]

  const themeColors: Naive.NaiveThemeColor = {}

  const colorEntries = Object.entries(colors) as [Theme.ThemeColorKey, string][]

  colorEntries.forEach((color) => {
    colorActions.forEach((action) => {
      const [colorType, colorValue] = color
      const colorKey: Naive.NaiveColorKey = `${colorType}Color${action.scene}`
      themeColors[colorKey] = action.handler(colorValue)
    })
  })

  return themeColors
}

/**
 * Get naive theme
 * @param colors Theme colors
 */
export function getNaiveTheme(colors: Theme.ThemeColor) {
  return {
    common: {
      ...getNaiveThemeColors(colors),
      borderRadius: '6px',
    },
    Tag: {
      borderRadius: '6px',
    },
  }
}

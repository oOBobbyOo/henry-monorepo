import { themeSettings } from '@/theme/settings'

/** Init theme settings */
export function initThemeSettings() {
  const isProd = import.meta.env.PROD

  if (!isProd)
    return themeSettings

  return themeSettings
}

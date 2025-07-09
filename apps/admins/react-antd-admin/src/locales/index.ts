import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import locales from './locale'

export const i18n = i18next.use(initReactI18next)

export async function setupI18n() {
  await i18n.init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'zh-CN',
    resources: locales,
  })
}

export const $t = i18n.t

export function setLocale(locale: App.I18n.LangType) {
  i18n.changeLanguage(locale)
}

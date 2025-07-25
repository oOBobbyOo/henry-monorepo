import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import locales from './locale'

export const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next)

export async function setupI18n() {
  const { VITE_APP_ENV } = import.meta.env

  await i18n.init({
    debug: VITE_APP_ENV === 'dev',
    fallbackLng: 'zh-CN',
    // 语言检测配置
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: true },
    resources: locales,
  })
}

export const $t = i18n.t

export function setLocale(locale: App.I18n.LangType) {
  i18n.changeLanguage(locale)
}

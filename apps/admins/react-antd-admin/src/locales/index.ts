import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

export const i18n = i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)

const { VITE_APP_ENV } = import.meta.env

export async function setupI18n() {
  await i18n.init({
    debug: VITE_APP_ENV === 'dev',
    lng: 'zh-CN', // 默认语言
    fallbackLng: 'zh-CN', // 回退语言
    ns: ['common', 'form', 'header', 'page', 'route', 'theme'], // 命名空间列表
    defaultNS: 'common', // 默认命名空间
    backend: {
      // loadPath: '/locales/{{lng}}/{{ns}}.json',
      loadPath: (lngs: string[], namespaces: any[]) => {
        const lng = convertLang(lngs[0])
        const ns = namespaces[0]
        return `/locales/${lng}/${ns}.json`
      },
      // 可自定义请求逻辑
      requestOptions: {
        cache: 'default', // 启用浏览器缓存
      },
    },
    // 语言检测配置
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'lang',
      lookupCookie: 'lang',
      convertDetectedLanguage: lng => convertLang(lng),
    },
    interpolation: {
      escapeValue: false,
    },
    react: { useSuspense: true },

    // 只加载语言代码，不加载区域代码
    load: 'languageOnly',

    // 允许非明确支持的语言
    nonExplicitSupportedLngs: true,

    // 键分隔符
    keySeparator: '.',
    nsSeparator: ':',

    // 等待翻译加载
    initImmediate: false,

    // 多语言翻译
    // resources: {},
  })
}

export const $t = i18n.t

export function setLocale(locale: App.I18n.LangType) {
  i18n.changeLanguage(locale)
}

export function convertLang(lng: string) {
  if (lng === 'zh')
    return 'zh-CN'
  if (lng === 'en')
    return 'en-US'
  return lng
}

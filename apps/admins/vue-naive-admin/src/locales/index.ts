import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './locale'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  globalInjection: true,
  messages,
})

export function setupI18n(app: App) {
  app.use(i18n)
}

export const $t = i18n.global.t

export function setLocale(locale: App.I18n.LangType) {
  i18n.global.locale.value = locale
}

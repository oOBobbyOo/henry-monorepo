import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import messages from './locale'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages,
})

export function setupI18n(app: App) {
  app.use(i18n)
}

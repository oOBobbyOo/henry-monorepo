import { locale } from 'dayjs'

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

/**
 * Set dayjs locale
 * @param lang
 */
export function setDayjsLocale(lang: App.I18n.LangType) {
  const localMap = {
    'en-US': 'en',
    'zh-CN': 'zh-cn',
  } satisfies Record<App.I18n.LangType, string>
  locale(localMap[lang])
}

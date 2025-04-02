import type { I18nOptions } from 'vue-i18n'

import enUS from './langs/en-us'
import zhCN from './langs/zh-cn'

const locales = {
  'zh-CN': zhCN,
  'en-US': enUS,
} as I18nOptions['messages']

export default locales

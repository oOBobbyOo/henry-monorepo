import type { Locale } from 'antd/lib/locale'
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'

export const antdLocales: Record<App.I18n.LangType, Locale> = {
  'en-US': enUS,
  'zh-CN': zhCN,
}

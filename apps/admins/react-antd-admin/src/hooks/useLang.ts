import { setLocale as setI18nLocale } from '@/locales'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getLocale, setLocale } from '@/stores/modules/app/slice'

export function useLang() {
  const dispath = useAppDispatch()
  const locale = useAppSelector(getLocale)

  const localeOptions: App.I18n.LangOption[] = [
    {
      label: '中文',
      key: 'zh-CN',
    },
    {
      label: 'English',
      key: 'en-US',
    },
  ]

  const changeLocale = (locale: App.I18n.LangType) => {
    dispath(setLocale(locale))
    setI18nLocale(locale)
  }

  return {
    locale,
    localeOptions,
    changeLocale,
  }
}

declare namespace App {
  namespace Global {
    interface Menu {
      label: string
      i18nKey?: string
      routeKey: string
      routePath: string
      icon?: React.ReactElement
      children?: Menu[]
    }
  }

  namespace I18n {
    type LangType = 'en-US' | 'zh-CN'

    interface LangOption {
      label: string
      key: LangType
    }
  }
}

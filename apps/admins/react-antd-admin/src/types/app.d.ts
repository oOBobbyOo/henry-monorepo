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

    interface MenuItem {
      key: string
      label: string
      icon?: React.ReactElement
      children?: MenuItem[]
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

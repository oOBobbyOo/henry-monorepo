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

    interface Tab {
      id: string
      label: string
      i18nKey?: string
      routeKey: string
      routePath: string
      icon?: string
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

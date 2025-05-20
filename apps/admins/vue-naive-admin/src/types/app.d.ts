declare namespace App {
  namespace Global {
    type VNode = import('vue').VNode

    interface RouterPushOptions {
      query?: Record<string, string>
      params?: Record<string, string>
    }

    interface Menu {
      key: string
      label: string
      i18nKey?: string
      routeKey: string
      routePath: string
      icon?: () => VNode
      children?: Menu[]
    }

    interface Tab {
      id: string
      label: string
      icon: string
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

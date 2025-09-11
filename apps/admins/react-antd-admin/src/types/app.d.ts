declare namespace App {
  namespace Global {
    /** The global menu */
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

    /** The global tab */
    interface Tab {
      label: string
      i18nKey?: string
      routeKey: string
      routePath: string
      icon?: string
    }

    /** The global dropdown key */
    type DropdownKey = 'closeAll' | 'closeCurrent' | 'closeLeft' | 'closeOther' | 'closeRight'
  }

  namespace I18n {
    type LangType = 'en-US' | 'zh-CN'

    interface LangOption {
      label: string
      key: LangType
    }
  }
}

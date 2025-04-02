declare namespace App {
  namespace I18n {
    type LangType = 'en-US' | 'zh-CN'

    interface LangOption {
      label: string
      key: LangType
    }
  }
}

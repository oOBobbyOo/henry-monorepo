declare namespace Naive {
  type NaiveColorScene = '' | 'Hover' | 'Pressed' | 'Active'

  type NaiveColorKey = `${Theme.ThemeColorKey}Color${NaiveColorScene}`

  type NaiveThemeColor = Partial<Record<NaiveColorKey, string>>

  interface NaiveColorAction {
    scene: NaiveColorScene
    handler: (color: string) => string
  }
}

import { setLocale } from '@/locales'
import { useBoolean } from '@henry/vhooks'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { defineStore } from 'pinia'
import { effectScope, onScopeDispose, ref, watch } from 'vue'

export const useAppStore = defineStore('app', () => {
  const scope = effectScope()

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const isMobile = breakpoints.smaller('sm')
  const isTablet = breakpoints.smaller('lg')

  const { bool: siderCollapse, setBool: setSiderCollapse, toggle: toggleSiderCollapse } = useBoolean()
  const { bool: themeDrawerVisible, setTrue: openThemeDrawer, setFalse: closeThemeDrawer } = useBoolean()

  const layoutMode = 'basic'

  const locale = ref<App.I18n.LangType>('zh-CN')

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

  function changeLocale(lang: App.I18n.LangType) {
    locale.value = lang
    setLocale(lang)
  }

  // watch store
  scope.run(() => {
    watch(locale, () => {
    })

    watch(isTablet, (val) => {
      setSiderCollapse(val)
    })
  })

  /** On scope dispose */
  onScopeDispose(() => {
    scope.stop()
  })

  return {
    isMobile,
    isTablet,
    layoutMode,
    locale,
    localeOptions,
    changeLocale,
    siderCollapse,
    setSiderCollapse,
    toggleSiderCollapse,
    themeDrawerVisible,
    openThemeDrawer,
    closeThemeDrawer,
  }
})

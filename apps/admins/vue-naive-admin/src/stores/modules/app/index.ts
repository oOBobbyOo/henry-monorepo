import { setLocale } from '@/locales'
import { useBoolean } from '@henry/vhooks'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const { bool: siderCollapse, setBool: setSiderCollapse, toggle: toggleSiderCollapse } = useBoolean()
  const { bool: themeDrawerVisible, setTrue: openThemeDrawer, setFalse: closeThemeDrawer } = useBoolean()

  /** Is mobile layout */
  const isMobile = breakpoints.smaller('sm')

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

  return {
    isMobile,
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

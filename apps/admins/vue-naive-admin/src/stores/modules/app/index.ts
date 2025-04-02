import type { LayoutMode } from '@/types'
import { useBoolean } from '@henry/vhooks'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const layoutMode: LayoutMode = 'basic'

  const locale = ref<App.I18n.LangType>('zh-CN')

  const { bool: siderCollapse, setBool: setSiderCollapse, toggle: toggleSiderCollapse } = useBoolean()

  return {
    layoutMode,
    locale,
    siderCollapse,
    setSiderCollapse,
    toggleSiderCollapse,
  }
})

import type { LayoutMode } from '@/types'
import { useBoolean } from '@henry/vhooks'

import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const layoutMode: LayoutMode = 'basic'

  const { bool: siderCollapse, setBool: setSiderCollapse, toggle: toggleSiderCollapse } = useBoolean()

  return {
    layoutMode,
    siderCollapse,
    setSiderCollapse,
    toggleSiderCollapse,
  }
})

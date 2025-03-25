import type { LayoutMode } from '@/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const layoutMode: LayoutMode = 'basic'

  return {
    layoutMode,
  }
})

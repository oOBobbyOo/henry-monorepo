import { isDark } from '@/composables/dark'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const darkMode = computed(() => {
    return isDark.value
  })

  const themeSchema = computed(() => {
    return isDark.value ? 'dark' : 'light'
  })

  /** Naive theme  */
  const naiveTheme = {}

  return {
    darkMode,
    themeSchema,
    naiveTheme,
  }
})

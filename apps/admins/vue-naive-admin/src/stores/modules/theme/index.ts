import { isDark } from '@/composables/dark'
import { usePreferredColorScheme } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, effectScope, onScopeDispose, ref, toRefs, unref, watch } from 'vue'
import { initThemeSettings } from './shared'

export const useThemeStore = defineStore('theme', () => {
  const scope = effectScope()
  const osTheme = usePreferredColorScheme()

  /** Theme settings */
  const settings = ref(initThemeSettings())

  /** Dark mode */
  const darkMode = computed(() => {
    return unref(isDark)
  })

  /** Naive theme  */
  const naiveTheme = {}

  /** themeScheme mode */
  const themeSchemeMode = computed(() => settings.value.themeScheme)

  /**
   * Set theme scheme
   * @param themeScheme
   */
  function setThemeScheme(themeScheme: Theme.ThemeScheme) {
    settings.value.themeScheme = themeScheme
  }

  /**
   * Set grayscale value
   * @param isGrayscale
   */
  function setGrayscale(isGrayscale: boolean) {
    settings.value.grayscale = isGrayscale
  }

  /**
   * Set colourWeakness value
   * @param isColourWeakness
   */
  function setColourWeakness(isColourWeakness: boolean) {
    settings.value.colourWeakness = isColourWeakness
  }

  /**
   * Toggle dark mode based on themeScheme
   * @param themeScheme
   */
  function toggleDarkMode(themeScheme: string) {
    if (themeScheme === 'auto') {
      isDark.value = unref(osTheme) === 'dark'
    }
    else {
      isDark.value = themeScheme === 'dark'
    }
  }

  /**
   * Toggle theme scheme based on dark mode
   * @param darkMode
   */
  function toggleThemeScheme(darkMode: boolean) {
    if (darkMode) {
      if (unref(osTheme) === 'dark' && unref(themeSchemeMode) === 'auto')
        return
      settings.value.themeScheme = 'dark'
    }
    else {
      if (unref(osTheme) === 'light' && unref(themeSchemeMode) === 'auto')
        return
      settings.value.themeScheme = 'light'
    }
  }

  // watch store
  scope.run(() => {
    watch(
      themeSchemeMode,
      (val) => {
        toggleDarkMode(val)
      },
      { immediate: true },
    )

    watch(
      darkMode,
      (val) => {
        toggleThemeScheme(val)
      },
      { immediate: true },
    )
  })

  /** On scope dispose */
  onScopeDispose(() => {
    scope.stop()
  })

  return {
    ...toRefs(settings.value),
    darkMode,
    naiveTheme,
    setThemeScheme,
    setGrayscale,
    setColourWeakness,
  }
})

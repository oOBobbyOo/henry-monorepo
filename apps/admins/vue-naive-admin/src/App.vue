<script setup lang="ts">
import { naiveDateLocales, naiveLocales } from '@/locales/naive'
import { useAppStore } from '@/stores/modules/app'
import { useThemeStore } from '@/stores/modules/theme'
import { darkTheme } from 'naive-ui'
import { computed } from 'vue'

const appStore = useAppStore()
const themeStore = useThemeStore()

const naiveDarkTheme = computed(() => (themeStore.darkMode ? darkTheme : undefined))

const naiveLocale = computed(() => {
  return naiveLocales[appStore.locale]
})

const naiveDateLocale = computed(() => {
  return naiveDateLocales[appStore.locale]
})
</script>

<template>
  <n-config-provider
    :theme="naiveDarkTheme"
    :theme-overrides="themeStore.naiveTheme"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    class="wh-full"
  >
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped>

</style>

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
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    class="wh-full"
  >
    <router-view />
  </n-config-provider>
</template>

<style scoped>

</style>

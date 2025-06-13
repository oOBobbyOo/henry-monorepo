<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'
import { useThemeStore } from '@/stores/modules/theme'

import { computed, watch } from 'vue'
import BasicLayout from './basic-layout/index.vue'
import MobileLayout from './mobile-layout/index.vue'

const appStore = useAppStore()
const themeStore = useThemeStore()

const layoutMap = {
  basic: BasicLayout,
  mobile: MobileLayout,
}

const layoutMode = computed(() => {
  const mode: Theme.ThemeLayoutMode = appStore.isMobile ? 'mobile' : themeStore.layout.mode
  return layoutMap[mode]
})

watch(() => appStore.isMobile, (val) => {
  if (val) {
    themeStore.setThemeLayout('mobile')
  }
  else {
    themeStore.setThemeLayout('basic')
  }
})
</script>

<template>
  <component :is="layoutMode" />
</template>

<style scoped></style>

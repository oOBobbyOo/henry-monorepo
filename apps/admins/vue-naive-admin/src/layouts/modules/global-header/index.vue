<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'
import { useThemeStore } from '@/stores/modules/theme'

import DarkMode from './components/DarkMode/index.vue'
import SiderToggler from './components/SiderToggler/index.vue'

defineOptions({ name: 'GlobalHeader' })

const appStore = useAppStore()
const themeStore = useThemeStore()
</script>

<template>
  <div class="layout-header flex-between px-3">
    <SiderToggler :collapsed="appStore.siderCollapse" @click="appStore.toggleSiderCollapse" />
    <div class="h-full flex-y-center justify-end">
      <DarkMode :theme-schema="themeStore.themeSchema" />
    </div>
  </div>
</template>

<style scoped>

</style>

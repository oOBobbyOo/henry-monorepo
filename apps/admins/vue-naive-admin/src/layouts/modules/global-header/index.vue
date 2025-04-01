<script setup lang='ts'>
import { useThemeStore } from '@/stores/modules/theme'

defineOptions({ name: 'GlobalHeader' })

const themeStore = useThemeStore()
</script>

<template>
  <div class="layout-header flex-between px-3">
    <div>1</div>
    <DarkMode :theme-schema="themeStore.themeSchema" />
  </div>
</template>

<style scoped>

</style>

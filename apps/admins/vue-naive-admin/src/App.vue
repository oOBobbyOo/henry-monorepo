<script setup lang="ts">
import { useThemeStore } from '@/stores/modules/theme'
import { darkTheme } from 'naive-ui'
import { computed } from 'vue'

const themeStore = useThemeStore()

const naiveDarkTheme = computed(() => (themeStore.darkMode ? darkTheme : undefined))
</script>

<template>
  <n-config-provider :theme="naiveDarkTheme" class="wh-full">
    <router-view />
  </n-config-provider>
</template>

<style scoped>

</style>

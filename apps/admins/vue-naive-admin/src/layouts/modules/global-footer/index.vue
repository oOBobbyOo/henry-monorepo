<script setup lang='ts'>
import { useThemeStore } from '@/stores/modules/theme'
import { computed } from 'vue'

defineOptions({ name: 'GlobalFooter' })

const themeStore = useThemeStore()

const height = computed(() => `${themeStore.footer.height}px`)
</script>

<template>
  <div class="layout-footer flex-center">
    Copyright © 2025 by @henry
  </div>
</template>

<style scoped>
.layout-footer {
  height: v-bind(height);
  box-shadow: var(--hb-footer-shadow);
}
</style>

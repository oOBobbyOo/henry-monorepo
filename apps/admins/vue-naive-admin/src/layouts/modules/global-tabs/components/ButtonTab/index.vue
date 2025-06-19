<script setup lang='ts'>
import type { PageTabProps } from '../PageTab/index.vue'
import style from '../PageTab/index.module.css'

defineOptions({ name: 'ButtonTab' })

defineProps<PageTabProps>()
</script>

<template>
  <div
    class="relative inline-flex items-center justify-center gap-4 whitespace-nowrap border-(1px solid) rounded-1 px-3 py-1 cursor-pointer"
    :class="[
      style['button-tab'],
      { [style['button-tab_dark']]: darkMode },
      { [style['button-tab_active']]: active },
      { [style['button-tab_active_dark']]: active && darkMode },
    ]"
  >
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
  </div>
</template>

<style scoped>

</style>

<script setup lang='ts'>
import ChromeTabBg from './ChromeTabBg.vue'

defineOptions({ name: 'ChromeTab' })
</script>

<template>
  <div class="chorme-tab relative inline-flex items-center justify-center gap-4 whitespace-nowrap px-6 py-6px -mr-18px cursor-pointer">
    <div class="chrome-tab-bg pointer-events-none absolute left-0 top-0 -z-1 h-full w-full text-transparent">
      <ChromeTabBg />
    </div>
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
    <div class="absolute right-7px h-16px w-1px bg-#1f2225" />
  </div>
</template>

<style scoped>

</style>

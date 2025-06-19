<script setup lang='ts'>
import type { PageTabProps } from '../PageTab/index.vue'
import style from '../PageTab/index.module.css'
import ChromeTabBg from './ChromeTabBg.vue'

defineOptions({ name: 'ChromeTab' })

defineProps<PageTabProps>()
</script>

<template>
  <div
    class="relative inline-flex items-center justify-center gap-4 whitespace-nowrap px-6 py-6px -mr-18px cursor-pointer"
    :class="[
      style['chrome-tab'],
      { [style['chrome-tab_dark']]: darkMode },
      { [style['chrome-tab_active']]: active },
      { [style['chrome-tab_active_dark']]: active && darkMode },
    ]"
  >
    <div
      class="pointer-events-none absolute left-0 top-0 -z-1 h-full w-full text-transparent"
      :class="[style['chrome-tab__bg']]"
    >
      <ChromeTabBg />
    </div>
    <slot name="prefix" />
    <slot />
    <slot name="suffix" />
    <div
      class="absolute right-7px h-16px w-1px bg-#1f2225"
      :class="[style['chrome-tab__divider']]"
    />
  </div>
</template>

<style scoped>

</style>

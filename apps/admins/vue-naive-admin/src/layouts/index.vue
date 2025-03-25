<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'

import BasicLayout from './basic-layout/index.vue'

const appStore = useAppStore()

const layoutMap = {
  basic: BasicLayout,
}
</script>

<template>
  <component :is="layoutMap[appStore.layoutMode]" />
</template>

<style scoped></style>

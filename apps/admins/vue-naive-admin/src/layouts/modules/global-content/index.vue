<script setup lang='ts'>
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

defineOptions({ name: 'GlobalContent' })

function getTransitionName(route: RouteLocationNormalizedLoadedGeneric): string {
  return route.meta?.transitionName || 'fade-slide'
}
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <Transition :name="getTransitionName(route)" mode="out-in" :appear="true">
      <component :is="Component" :key="route.path" />
    </Transition>
  </router-view>
</template>

<style scoped></style>

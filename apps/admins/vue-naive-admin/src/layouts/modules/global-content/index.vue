<script setup lang='ts'>
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

defineOptions({ name: 'GlobalContent' })

function getTransitionName(route: RouteLocationNormalizedLoadedGeneric): string {
  return route.meta?.transitionName || 'fade-slide'
}
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="getTransitionName(route)" mode="out-in" :appear="true">
      <component :is="Component" :key="route.path" class="p-4 flex-col gap-4 transition-300" />
    </Transition>
  </RouterView>
</template>

<style scoped></style>

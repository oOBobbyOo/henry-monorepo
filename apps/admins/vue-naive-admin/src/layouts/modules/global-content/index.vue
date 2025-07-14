<script setup lang='ts'>
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'
import { useThemeStore } from '@/stores/modules/theme'
import { computed, unref } from 'vue'

defineOptions({ name: 'GlobalContent' })

const themeStore = useThemeStore()

const transitionName = computed(() => (themeStore.page.animate ? themeStore.page.animateMode : 'none'))

function getTransitionName(route: RouteLocationNormalizedLoadedGeneric): string {
  return route.meta?.transitionName || unref(transitionName)
}
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="getTransitionName(route)" mode="out-in" :appear="true">
      <component :is="Component" :key="route.path" class="global-layout-content p-4 flex-col gap-4 transition-300" />
    </Transition>
  </RouterView>
</template>

<style scoped></style>

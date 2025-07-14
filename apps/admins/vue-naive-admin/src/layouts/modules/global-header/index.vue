<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'
import { useThemeStore } from '@/stores/modules/theme'

import { useFullscreen } from '@vueuse/core'

import { computed } from 'vue'
import DarkSwitch from './components/DarkSwitch/index.vue'
import LangSwitch from './components/LangSwitch/index.vue'
import SiderToggler from './components/SiderToggler/index.vue'
import ThemeButton from './components/ThemeButton/index.vue'
import UserAvatar from './components/UserAvatar/index.vue'

defineOptions({ name: 'GlobalHeader' })

const appStore = useAppStore()
const themeStore = useThemeStore()

const headerHeight = computed(() => `${themeStore.header.height}px`)

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <div class="global-layout-header flex-between px-4">
    <SiderToggler :collapsed="appStore.siderCollapse" @click="appStore.toggleSiderCollapse" />
    <div class="h-full flex-y-center justify-end gap-2">
      <FullScreen :full="isFullscreen" @click="toggle" />
      <LangSwitch
        :lang="appStore.locale" :lang-options="appStore.localeOptions"
        @change-lang="appStore.changeLocale"
      />
      <DarkSwitch circle :dark-mode="themeStore.darkMode" />
      <ThemeButton />
      <UserAvatar />
    </div>
  </div>
</template>

<style scoped>
.global-layout-header {
  height: v-bind(headerHeight);
  box-shadow: var(--hb-header-shadow);
}
</style>

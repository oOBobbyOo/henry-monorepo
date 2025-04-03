<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'
import { useThemeStore } from '@/stores/modules/theme'

import { useFullscreen } from '@vueuse/core'

import DarkMode from './components/DarkMode/index.vue'
import FullScreen from './components/FullScreen/index.vue'
import LangSwitch from './components/LangSwitch/index.vue'
import SiderToggler from './components/SiderToggler/index.vue'
import UserAvatar from './components/UserAvatar/index.vue'

defineOptions({ name: 'GlobalHeader' })

const appStore = useAppStore()
const themeStore = useThemeStore()

const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <div class="layout-header flex-between px-3">
    <SiderToggler :collapsed="appStore.siderCollapse" @click="appStore.toggleSiderCollapse" />
    <div class="h-full flex-y-center justify-end gap-2">
      <FullScreen :full="isFullscreen" @click="toggle" />
      <LangSwitch
        :lang="appStore.locale" :lang-options="appStore.localeOptions"
        @change-lang="appStore.changeLocale"
      />
      <DarkMode circle :theme-schema="themeStore.themeSchema" />
      <UserAvatar />
    </div>
  </div>
</template>

<style scoped>

</style>

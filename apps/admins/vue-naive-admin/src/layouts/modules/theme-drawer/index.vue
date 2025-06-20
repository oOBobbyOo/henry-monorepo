<script setup lang='ts'>
import { $t } from '@/locales'
import { useAppStore } from '@/stores/modules/app'
import DarkMode from './components/DarkMode/index.vue'
import PageSetting from './components/PageSetting/index.vue'
import ThemeColor from './components/ThemeColor/index.vue'

defineOptions({ name: 'ThemeDrawer' })

const appStore = useAppStore()
</script>

<template>
  <NDrawer v-model:show="appStore.themeDrawerVisible" display-directive="show" :width="360">
    <NDrawerContent :title="$t('theme.themeDrawerTitle')" :native-scrollbar="false" closable>
      <DarkMode />
      <ThemeColor />
      <PageSetting />
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped>

</style>

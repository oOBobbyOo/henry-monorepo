<script setup lang='ts'>
import { $t } from '@/locales'
import { useAppStore } from '@/stores/modules/app'

defineOptions({ name: 'ThemeDrawer' })

const appStore = useAppStore()
</script>

<template>
  <n-drawer v-model:show="appStore.themeDrawerVisible" display-directive="show" :width="360">
    <n-drawer-content :title="$t('theme.themeDrawerTitle')" :native-scrollbar="false" closable />
  </n-drawer>
</template>

<style scoped>

</style>

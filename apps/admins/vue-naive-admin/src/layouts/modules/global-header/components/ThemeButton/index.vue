<script setup lang='ts'>
import { $t } from '@/locales'
import { useAppStore } from '@/stores/modules/app'

defineOptions({ name: 'ThemeButton' })

const appStore = useAppStore()
</script>

<template>
  <ButtonIcon
    circle
    icon="majesticons:color-swatch-line"
    :content="$t('icon.themeConfig')"
    @click="appStore.openThemeDrawer"
  />
</template>

<style scoped>

</style>

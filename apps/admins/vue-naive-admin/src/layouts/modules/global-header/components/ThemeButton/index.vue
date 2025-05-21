<script setup lang='ts'>
import { $t } from '@/locales'

defineOptions({ name: 'ThemeButton' })
</script>

<template>
  <ButtonIcon
    circle
    icon="majesticons:color-swatch-line"
    :content="$t('icon.themeConfig')"
  />
</template>

<style scoped>

</style>

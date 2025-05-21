<script setup lang='ts'>
defineOptions({ name: 'FullScreen' })

defineProps<Props>()

interface Props {
  full?: boolean
}
</script>

<template>
  <ButtonIcon :key="String(full)" circle :content="full ? $t('header.fullscreenExit') : $t('header.fullscreen')">
    <icon-gridicons-fullscreen-exit v-if="full" />
    <icon-gridicons-fullscreen v-else />
  </ButtonIcon>
</template>

<style scoped>

</style>

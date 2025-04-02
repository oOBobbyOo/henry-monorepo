<script setup lang='ts'>
defineOptions({ name: 'FullScreen' })

defineProps<Props>()

interface Props {
  full?: boolean
}
</script>

<template>
  <ButtonIcon :key="String(full)" content="全屏">
    <icon-gridicons-fullscreen-exit v-if="full" />
    <icon-gridicons-fullscreen v-else />
  </ButtonIcon>
</template>

<style scoped>

</style>

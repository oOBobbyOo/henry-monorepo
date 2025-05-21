<script setup lang='ts'>
defineOptions({ name: 'ReloadButton' })

defineProps<Props>()

interface Props {
  loading?: boolean
}
</script>

<template>
  <ButtonIcon circle :content="$t('icon.reload')">
    <icon-ant-design-reload-outlined :class="{ 'animate-spin animate-duration-750': loading }" />
  </ButtonIcon>
</template>

<style scoped>

</style>

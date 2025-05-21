<script setup lang='ts'>
defineOptions({ name: 'SettingItem' })

defineProps<Props>()

interface Props {
  label: string
}
</script>

<template>
  <div class="w-full flex-y-center justify-between">
    <div>
      <span class="pr-2 text-base">{{ label }}</span>
      <slot name="suffix" />
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>

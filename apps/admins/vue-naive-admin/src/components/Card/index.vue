<script setup lang='ts'>
import { useAttrs } from 'vue'

defineOptions({ name: 'Card' })

const attrs = useAttrs()
</script>

<template>
  <NCard
    size="small"
    :bordered="false"
    :segmented="{
      content: true,
    }"
    class="b-rd-2"
    v-bind="attrs"
  >
    <slot />
  </NCard>
</template>

<style scoped>

</style>

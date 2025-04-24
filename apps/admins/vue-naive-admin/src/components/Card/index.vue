<script setup lang='ts'>
import { useAttrs } from 'vue'

defineOptions({ name: 'Card' })

const attrs = useAttrs()
</script>

<template>
  <n-card
    size="small"
    :bordered="false"
    :segmented="{
      content: true,
    }"
    class="b-rd-2"
    v-bind="attrs"
  >
    <slot />
  </n-card>
</template>

<style scoped>

</style>

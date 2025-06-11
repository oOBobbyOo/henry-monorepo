<script setup lang='ts'>
import { CountTo } from 'vue3-count-to'

defineOptions({ name: 'CountTo' })
</script>

<template>
  <CountTo v-bind="$attrs" />
</template>

<style scoped>

</style>

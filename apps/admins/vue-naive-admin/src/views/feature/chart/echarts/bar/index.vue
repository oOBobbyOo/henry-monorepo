<script setup lang='ts'>
import PictogramBar from './PictogramBar.vue'

defineOptions({ name: 'BarCharts' })
</script>

<template>
  <NGrid cols="1 l:2" :x-gap="12" :y-gap="24" responsive="screen" item-responsive>
    <NGi>
      <PictogramBar />
    </NGi>
  </NGrid>
</template>

<style scoped>

</style>

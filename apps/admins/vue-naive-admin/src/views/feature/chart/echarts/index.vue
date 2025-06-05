<script setup lang='ts'>
import BarCharts from './bar/index.vue'
import LineCharts from './line/index.vue'
</script>

<template>
  <div>
    <NCard title="柱状图" :bordered="false" class="card-wrapper">
      <BarCharts />
    </NCard>
    <NCard title="折线图" :bordered="false" class="card-wrapper">
      <LineCharts />
    </NCard>
  </div>
</template>

<style scoped>

</style>

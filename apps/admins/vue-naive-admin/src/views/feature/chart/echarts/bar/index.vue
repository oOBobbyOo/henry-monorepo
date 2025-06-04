<script setup lang='ts'>
import type { Component } from 'vue'
import CylinderBar from './CylinderBar.vue'
import PictogramBar from './PictogramBar.vue'

interface Chart {
  id: string
  component: Component
}

const charts: Chart[] = [
  { id: 'CylinderBar', component: CylinderBar },
  { id: 'PictogramBar', component: PictogramBar },
]
</script>

<template>
  <NGrid cols="1 l:2" :x-gap="12" :y-gap="24" responsive="screen" item-responsive>
    <NGi v-for="chart in charts" :key="chart.id">
      <component :is="chart.component" />
    </NGi>
  </NGrid>
</template>

<style scoped>

</style>

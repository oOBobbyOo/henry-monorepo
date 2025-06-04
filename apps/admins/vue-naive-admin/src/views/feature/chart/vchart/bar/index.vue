<script setup lang='ts'>
import type { Component } from 'vue'
import BaseBar from './BaseBar.vue'
import GroupBar from './GroupBar.vue'

interface Chart {
  id: string
  component: Component
}

const charts: Chart[] = [
  { id: 'BaseBar', component: BaseBar },
  { id: 'GroupBar', component: GroupBar },
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

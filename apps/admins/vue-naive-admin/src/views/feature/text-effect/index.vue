<script setup lang='ts'>
import type { Component } from 'vue'
import GradientText from './gradient-text.vue'
import NoticeText from './notice-text.vue'

interface Option {
  id: string
  label: string
  component: Component
}

const effects: Option[] = [
  { id: 'GradientText', label: '渐变文字', component: GradientText },
  { id: 'MarqueeNotice', label: '公告通知', component: NoticeText },
]
</script>

<template>
  <div class="h-full">
    <NCard title="文字效果" :bordered="false" class="h-full card-wrapper" content-style="overflow:hidden">
      <NTabs type="line" class="h-full flex-col-stretch" pane-class="flex-1-hidden">
        <NTabPane v-for="item in effects" :key="item.id" :name="item.id" :tab="item.label">
          <component :is="item.component" />
        </NTabPane>
      </NTabs>
    </NCard>
  </div>
</template>

<style scoped>

</style>

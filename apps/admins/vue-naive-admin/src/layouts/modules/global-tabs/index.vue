<script setup lang='ts'>
import { useTabStore } from '@/stores/modules/tab'
import PageTab from './components/PageTab/index.vue'

const tabStore = useTabStore()
</script>

<template>
  <div class="layout-tabs px-4">
    <div class="h-full flex items-end">
      <PageTab
        v-for="tab in tabStore.tabs"
        :key="tab.id"
        :active="tab.id === tabStore.activeTabId"
        mode="chrome"
      >
        <template #prefix>
          <SvgIcon :icon="tab.icon" class="inline-block align-text-bottom text-16px" />
        </template>
        <div class="max-w-240px text-ellipsis overflow-hidden whitespace-nowrap">
          {{ tab.label }}
        </div>
      </PageTab>
    </div>
  </div>
</template>

<style scoped>

</style>

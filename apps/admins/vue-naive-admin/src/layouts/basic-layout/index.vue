<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'

import GlobalContent from '../modules/global-content/index.vue'
import GlobalFooter from '../modules/global-footer/index.vue'
import GlobalHeader from '../modules/global-header/index.vue'
import GlobalSider from '../modules/global-sider/index.vue'
import GlobalTabs from '../modules/global-tabs/index.vue'

defineOptions({ name: 'BasicLayout' })

const appStore = useAppStore()
</script>

<template>
  <n-layout has-sider embedded class="wh-full">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="appStore.siderCollapse"
    >
      <GlobalSider />
    </n-layout-sider>
    <n-layout embedded content-class="min-h-full flex-col">
      <n-layout-header bordered position="absolute" class="z-999">
        <GlobalHeader />
        <GlobalTabs />
      </n-layout-header>
      <n-layout-content
        embedded
        :native-scrollbar="false"
        content-class="size-full"
        class="flex-1 p-t-[100px] p-b-[50px]"
      >
        <GlobalContent />
      </n-layout-content>
      <n-layout-footer bordered position="absolute" class="z-999">
        <GlobalFooter />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>

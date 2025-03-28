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
      :collapse="appStore.siderCollapse"
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
    >
      <GlobalSider />
    </n-layout-sider>
    <n-layout embedded :native-scrollbar="false" content-class="min-h-full flex-col">
      <n-layout-header bordered position="absolute" class="z-999">
        <GlobalHeader />
        <GlobalTabs />
      </n-layout-header>
      <n-layout-content embedded class="flex-1 p-t-[116px] p-b-[64px] px-4">
        <GlobalContent />
      </n-layout-content>
      <n-layout-footer bordered position="absolute" class="z-999">
        <GlobalFooter />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>

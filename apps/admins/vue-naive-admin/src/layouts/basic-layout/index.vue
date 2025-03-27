<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'

import GlobalContent from '../modules/global-content/index.vue'
import GlobalFooter from '../modules/global-footer/index.vue'
import GlobalHeader from '../modules/global-header/index.vue'
import GlobalSider from '../modules/global-sider/index.vue'

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
    <n-layout embedded :native-scrollbar="false">
      <n-layout-header bordered>
        <GlobalHeader />
      </n-layout-header>
      <n-layout-content>
        <GlobalContent />
      </n-layout-content>
      <n-layout-footer bordered>
        <GlobalFooter />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped></style>

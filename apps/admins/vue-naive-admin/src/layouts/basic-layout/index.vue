<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'

import { useThemeStore } from '@/stores/modules/theme'
import GlobalContent from '../modules/global-content/index.vue'
import GlobalFooter from '../modules/global-footer/index.vue'
import GlobalHeader from '../modules/global-header/index.vue'
import GlobalSider from '../modules/global-sider/index.vue'
import GlobalTabs from '../modules/global-tabs/index.vue'
import ThemeDrawer from '../modules/theme-drawer/index.vue'

defineOptions({ name: 'BasicLayout' })

const appStore = useAppStore()
const themeStore = useThemeStore()
</script>

<template>
  <NLayout has-sider embedded class="wh-full">
    <NLayoutSider
      bordered
      collapse-mode="width"
      :collapsed-width="themeStore.sider.collapsedWidth"
      :width="themeStore.sider.width"
      :collapsed="appStore.siderCollapse"
    >
      <GlobalSider />
    </NLayoutSider>
    <NLayout embedded content-class="min-h-full flex-col">
      <NLayoutHeader bordered position="absolute" class="z-999">
        <GlobalHeader />
        <GlobalTabs />
      </NLayoutHeader>
      <NLayoutContent
        embedded
        :native-scrollbar="false"
        content-class="size-full"
        class="flex-1 p-t-[100px] p-b-[50px]"
      >
        <GlobalContent />
        <ThemeDrawer />
      </NLayoutContent>
      <NLayoutFooter bordered position="absolute" class="z-999">
        <GlobalFooter />
      </NLayoutFooter>
    </NLayout>
  </NLayout>
</template>

<style scoped></style>

<script setup lang='ts'>
import { useAppStore } from '@/stores/modules/app'

import { useThemeStore } from '@/stores/modules/theme'
import { computed } from 'vue'
import GlobalContent from '../modules/global-content/index.vue'
import GlobalFooter from '../modules/global-footer/index.vue'
import GlobalHeader from '../modules/global-header/index.vue'
import GlobalSider from '../modules/global-sider/index.vue'
import GlobalTabs from '../modules/global-tabs/index.vue'
import ThemeDrawer from '../modules/theme-drawer/index.vue'

defineOptions({ name: 'DestopLayout' })

const appStore = useAppStore()
const themeStore = useThemeStore()

const contentStyle = computed(() => {
  return {
    'padding-top': `${themeStore.header.height + themeStore.tab.height}px`,
    'padding-bottom': `${themeStore.footer.height}px`,
  }
})
</script>

<template>
  <NLayout has-sider embedded class="wh-full">
    <NLayoutSider
      collapse-mode="width"
      :collapsed-width="themeStore.sider.collapsedWidth"
      :width="themeStore.sider.width"
      :collapsed="appStore.siderCollapse"
      class="global-layout-sider z-9"
    >
      <GlobalSider />
    </NLayoutSider>
    <NLayout embedded content-class="min-h-full flex-col">
      <NLayoutHeader position="absolute" class="z-8">
        <GlobalHeader />
        <GlobalTabs />
      </NLayoutHeader>
      <NLayoutContent
        embedded
        :native-scrollbar="true"
        class="flex-1"
        :style="contentStyle"
      >
        <GlobalContent />
        <ThemeDrawer />
      </NLayoutContent>
      <NLayoutFooter position="absolute" class="z-8">
        <GlobalFooter />
      </NLayoutFooter>
    </NLayout>
  </NLayout>
</template>

<style scoped>
.global-layout-sider {
  box-shadow: var(--hb-sider-shadow);
}
</style>

<script setup lang='ts'>
import GlobalLogo from '../global-logo/index.vue'
import GlobalMenus from '../global-menus/index.vue'

defineOptions({ name: 'GlobalSider' })
</script>

<template>
  <div class="global-layout-sider h-full flex-col">
    <GlobalLogo />
    <NScrollbar class="flex-1">
      <GlobalMenus />
    </NScrollbar>
  </div>
</template>

<style scoped></style>

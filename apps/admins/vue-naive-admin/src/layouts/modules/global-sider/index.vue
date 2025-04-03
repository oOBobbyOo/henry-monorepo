<script setup lang='ts'>
import GlobalLogo from '../global-logo/index.vue'
import GlobalMenus from '../global-menus/index.vue'

defineOptions({ name: 'GlobalSider' })
</script>

<template>
  <div class="layout-sider">
    <GlobalLogo />
    <GlobalMenus />
  </div>
</template>

<style scoped></style>

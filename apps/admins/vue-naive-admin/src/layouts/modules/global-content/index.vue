<script setup lang='ts'>
defineOptions({ name: 'GlobalContent' })
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
</template>

<style scoped></style>

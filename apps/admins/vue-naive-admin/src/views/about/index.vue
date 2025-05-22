<script setup lang='ts'>
import pkg from '~/package.json'
</script>

<template>
  <NSpace vertical :size="16">
    <Card title="关于">
      HenryAdmin 是一个优雅且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia 和 UnoCSS。
    </Card>

    <Card title="开发环境依赖">
      <NDescriptions
        label-placement="left"
        bordered
        :column="2"
      >
        <NDescriptionsItem
          v-for="(item, key) in pkg.devDependencies"
          :key="key"
          :label="key"
        >
          {{ item }}
        </NDescriptionsItem>
      </NDescriptions>
    </Card>

    <Card title="生产环境依赖">
      <NDescriptions
        label-placement="left"
        bordered
        :column="2"
      >
        <NDescriptionsItem
          v-for="(item, key) in pkg.dependencies"
          :key="key"
          :label="key"
        >
          {{ item }}
        </NDescriptionsItem>
      </NDescriptions>
    </Card>
  </NSpace>
</template>

<style scoped>

</style>

<script setup lang='ts'>
import pkg from '~/package.json'
</script>

<template>
  <div>
    <Card title="关于">
      HenryAdmin 是一个优雅且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia 和 UnoCSS。
    </Card>

    <Card title="开发环境依赖">
      <n-descriptions
        label-placement="left"
        bordered
        :column="2"
      >
        <n-descriptions-item
          v-for="(item, key) in pkg.devDependencies"
          :key="key"
          :label="key"
        >
          {{ item }}
        </n-descriptions-item>
      </n-descriptions>
    </Card>

    <Card title="生产环境依赖">
      <n-descriptions
        label-placement="left"
        bordered
        :column="2"
      >
        <n-descriptions-item
          v-for="(item, key) in pkg.dependencies"
          :key="key"
          :label="key"
        >
          {{ item }}
        </n-descriptions-item>
      </n-descriptions>
    </Card>
  </div>
</template>

<style scoped>

</style>

<script setup lang='ts'>
import { ref } from 'vue'

const editorHtml = ref(`<h1>欢迎使用富文本编辑器 wangEditor</h1>`)
</script>

<template>
  <div>
    <NCard title="WangEditor" :bordered="false" size="small" segmented class="card-wrapper">
      <WangEditor v-model="editorHtml" />
    </NCard>

    <NCard title="预览" :bordered="false" size="small" segmented class="card-wrapper">
      <div class="preview-content" v-html="editorHtml" />
    </NCard>
  </div>
</template>

<style scoped>

</style>

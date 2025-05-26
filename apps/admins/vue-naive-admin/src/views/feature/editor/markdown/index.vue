<script setup lang='ts'>
// @see https://github.com/pd4d10/bytemd
import gfm from '@bytemd/plugin-gfm'
import { Editor } from '@bytemd/vue-next'
import { ref } from 'vue'
import 'bytemd/dist/index.css'

const content = ref('# Hello, Markdown!')

const plugins = [
  gfm(),
  // Add more plugins here
]

function handleChange(v: string) {
  content.value = v
}
</script>

<template>
  <div>
    <NCard title="Markdown" :bordered="false" size="small" segmented class="card-wrapper">
      <Editor :value="content" :plugins="plugins" @change="handleChange" />
    </NCard>
  </div>
</template>

<style scoped>

</style>

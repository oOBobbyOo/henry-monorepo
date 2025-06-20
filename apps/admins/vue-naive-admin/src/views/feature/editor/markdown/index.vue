<script setup lang='ts'>
// @see https://github.com/pd4d10/bytemd
import gfm from '@bytemd/plugin-gfm'
import { Editor as BytemdEditor, Viewer as BytemdViewer } from '@bytemd/vue-next'
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
      <BytemdEditor :value="content" :plugins="plugins" @change="handleChange" />
    </NCard>

    <NCard title="预览" :bordered="false" size="small" segmented class="card-wrapper">
      <BytemdViewer :value="content" :plugins="plugins" />
    </NCard>
  </div>
</template>

<style scoped>
::v-deep(.bytemd) {
  height: 400px;
  color: inherit;
  background: inherit;
  border: 1px solid var(--n-border-color);
}

::v-deep(.bytemd-toolbar) {
  background: inherit;
  border-bottom: 1px solid var(--n-border-color);
}

::v-deep(.CodeMirror) {
  background: inherit;
}

::v-deep(.bytemd-status) {
  border-top: 1px solid var(--n-border-color);
}

::v-deep(.bytemd-split .bytemd-preview) {
  border-left: 1px solid var(--n-border-color);
}
</style>

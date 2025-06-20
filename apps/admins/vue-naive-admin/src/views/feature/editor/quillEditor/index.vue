<script setup lang='ts'>
// @see https://vueup.github.io/vue-quill/guide/installation.html
import { QuillEditor } from '@vueup/vue-quill'
import { reactive, ref } from 'vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const contentHtml = ref('<p>欢迎使用富文本编辑器 QuillEditor</p>')

const editorOptions = reactive({
  modules: {
    // toolbar: [ // 工具栏配置
    //   ['bold', 'italic', 'underline', 'strike'], // 粗体、斜体、下划线、删除线
    //   ['blockquote', 'code-block'], // 引用和代码块
    //   [{ header: 1 }, { header: 2 }], // 标题1和标题2
    //   [{ list: 'ordered' }, { list: 'bullet' }], // 有序列表和无序列表
    //   [{ script: 'sub' }, { script: 'super' }], // 上标和下标
    //   [{ indent: '-1' }, { indent: '+1' }], // 缩进
    //   [{ direction: 'rtl' }], // 文字方向
    //   [{ size: ['small', false, 'large', 'huge'] }], // 字号
    //   [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题等级
    //   [{ color: [] }, { background: [] }], // 字体颜色和背景色
    //   [{ font: [] }], // 字体
    //   [{ align: [] }], // 对齐方式
    //   ['link', 'image', 'video'], // 链接、图片、视频
    //   ['clean'], // 清除格式
    // ],
  },
})
</script>

<template>
  <div>
    <NCard title="QuillEditor" :bordered="false" size="small" segmented class="card-wrapper">
      <QuillEditor v-model:content="contentHtml" theme="snow" :options="editorOptions" content-type="html" toolbar="full" />
    </NCard>

    <NCard title="预览" :bordered="false" size="small" segmented class="card-wrapper">
      <div class="preview-content" v-html="contentHtml" />
    </NCard>
  </div>
</template>

<style scoped>
::v-deep(.ql-editor) {
  height: 400px;
}

::v-deep(.ql-toolbar.ql-snow) {
  border-color: var(--n-border-color);
}

::v-deep(.ql-container.ql-snow) {
  border-color: var(--n-border-color);
}
</style>

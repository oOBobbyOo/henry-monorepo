<script setup lang='ts'>
import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { onBeforeUnmount, shallowRef } from 'vue'
import '@wangeditor/editor/dist/css/style.css'

defineOptions({ name: 'WangEditor' })

withDefaults(defineProps<Props>(), {
  mode: 'default',
  height: '400px',
})

const modelValue = defineModel<string>({ required: true })

interface Props {
  mode?: 'default' | 'simple'
  height?: string
}

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 工具栏配置 https://www.wangeditor.com/v5/toolbar-config.html
const toolbarConfig: Partial<IToolbarConfig> = {}

// 编辑器配置 https://www.wangeditor.com/v5/editor-config.html
const editorConfig: Partial<IEditorConfig> = {
  placeholder: '请输入内容...',
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null)
    return
  editor.destroy()
})

function handleCreated(editor: IDomEditor) {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<template>
  <div class="editor-wrapper">
    <Toolbar
      class="w-e-toolbar"
      :editor="editorRef"
      :default-config="toolbarConfig"
      :mode="mode"
    />
    <Editor
      v-model="modelValue"
      class="w-e-container"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
    />
  </div>
</template>

<style scoped>
.editor-wrapper {
  border: 1px solid var(--n-border-color);
}

::v-deep(.w-e-toolbar) {
  background: inherit;
}

::v-deep(.w-e-bar-divider) {
  background-color: var(--n-border-color);
}

::v-deep(.w-e-container) {
  border-top: 1px solid var(--n-border-color);
  height: v-bind(height) !important;
  overflow-y: hidden;
}

::v-deep(.w-e-text-container) {
  background: inherit;
  color: var(--n-text-color);
}
</style>

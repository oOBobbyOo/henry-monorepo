<script setup lang='ts'>
import type { Options } from 'jsbarcode'
import JsBarcode from 'jsbarcode'
import { onMounted, useTemplateRef } from 'vue'

defineOptions({ name: 'BarCode' })

const props = withDefaults(defineProps<Props>(), {
  tag: 'svg',
  text: '',
})

interface Props {
  tag?: 'svg' | 'canvas' | 'img'
  text?: string
  options?: Options
}

const node = useTemplateRef('node')

onMounted(() => {
  JsBarcode(node.value, props.text, props.options)
})
</script>

<template>
  <component :is="tag" ref="node" />
</template>

<style scoped>

</style>

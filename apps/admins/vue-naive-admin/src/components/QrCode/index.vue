<script setup lang='ts'>
// @see https://github.com/soldair/node-qrcode
import type { QRCodeRenderersOptions, QRCodeSegment } from 'qrcode'
import { toCanvas, toDataURL } from 'qrcode'
import { onMounted, unref, useTemplateRef } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  tag: 'canvas',
  text: '',
  width: 200,
})

const emit = defineEmits<Emits>()

interface Props {
  tag?: 'canvas' | 'img'
  text?: string | QRCodeSegment[]
  width?: number
  options?: QRCodeRenderersOptions
}

interface Emits {
  (e: 'done', data: { url?: string, ctx?: CanvasRenderingContext2D | null }): void
  (e: 'error', error: any): void
}

const qrCodeRef = useTemplateRef('qrCodeRef')

function getErrorCorrectionLevel(text: string | QRCodeSegment[]): 'L' | 'M' | 'Q' | 'H' {
  const length = text.length
  if (length < 10)
    return 'L'
  if (length < 20)
    return 'M'
  if (length < 30)
    return 'Q'
  return 'H'
}

async function createQrCode() {
  try {
    const { tag, text, options = {}, width } = props
    const renderContent = String(text)

    if (!qrCodeRef.value || !renderContent)
      return

    if (tag === 'canvas') {
      await toCanvas(unref(qrCodeRef), renderContent, {
        errorCorrectionLevel: options.errorCorrectionLevel || getErrorCorrectionLevel(renderContent),
        width,
        ...options,
      })
      emit('done', { ctx: (unref(qrCodeRef) as HTMLCanvasElement).getContext('2d') })
    }

    if (tag === 'img') {
      const url = await toDataURL(renderContent, {
        errorCorrectionLevel: options.errorCorrectionLevel || getErrorCorrectionLevel(renderContent),
        width,
        ...options,
      });

      (unref(qrCodeRef) as HTMLImageElement).src = url

      emit('done', { url })
    }
  }
  catch (error) {
    emit('error', error)
  }
}

onMounted(() => {
  createQrCode()
})
</script>

<template>
  <component :is="tag" ref="qrCodeRef" />
</template>

<style scoped>

</style>

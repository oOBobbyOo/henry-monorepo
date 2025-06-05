<script setup lang='ts'>
import type { QrCodeOptions } from '@/components/QrCode/index.vue'

const text = 'http://localhost:5173'

interface QrCodeProps {
  id: string
  tag?: 'canvas' | 'img'
  title: string
  text: string
  options?: QrCodeOptions
}

const qrcodes: QrCodeProps[] = [
  {
    id: 'qrcode',
    title: '正常尺寸',
    text,
  },
  {
    id: 'qrcode1',
    title: '设置尺寸',
    text,
    options: {
      width: 160,
    },
  },
  {
    id: 'qrcode2',
    title: '设置颜色',
    text,
    options: {
      color: {
        dark: '#2962ff', // 默认, 二维码的前景色（黑色 #000000ff)
        light: '#f7f8fa', // 默认, 二维码的背景色（白色 #ffffffff)
      },
    },
  },
  {
    id: 'qrcode3',
    title: '设置边距大小',
    text,
    options: {
      margin: 8, // 边距，默认：4
    },
  },
  {
    id: 'qrcode4',
    title: '设置模块大小',
    text,
    options: {
      scale: 10, // 模块大小，默认：4
    },
  },
  {
    id: 'qrcode5',
    title: '错误修正级别',
    text,
    options: {
      errorCorrectionLevel: 'H', // 错误修正级别：L (低), M (中), Q (较高), H (最高)
    },
  },
  {
    id: 'qrcode6',
    tag: 'img',
    title: 'img 渲染',
    text,
    options: {
      type: 'image/jpeg', // 'image/png' | 'image/jpeg' | 'image/webp', 默认：'image/png'
    },
  },
  {
    id: 'qrcode7',
    tag: 'img',
    title: 'webp 渲染',
    text,
    options: {
      type: 'image/webp',
      rendererOpts: {
        quality: 0.72, // 质量，默认：0.92
      },
    },
  },
]
</script>

<template>
  <div class="h-full">
    <NCard title="二维码" :bordered="false" class="card-wrapper h-full" content-class="overflow-hidden">
      <NScrollbar class="h-full">
        <NGrid cols="1 s:2 l:3" :x-gap="12" :y-gap="24" responsive="screen" item-responsive>
          <NGi v-for="item in qrcodes" :key="item.id">
            <div class="flex-col-center">
              <h3>{{ item.title }}</h3>
              <QrCode :tag="item.tag" :text="item.text" :options="item.options" />
            </div>
          </NGi>
        </NGrid>
      </NScrollbar>
    </NCard>
  </div>
</template>

<style scoped>

</style>

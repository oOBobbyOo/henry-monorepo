import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'

const feature: RouteRecordRaw = {
  path: '/feature',
  name: 'Feature',
  component: Layout,
  redirect: '/feature/barcode',
  meta: {
    title: '功能',
    i18nKey: 'route.feature.page',
    icon: 'cil:featured-playlist',
    keepAlive: true,
    order: 5,
  },
  children: [
    {
      path: 'barcode',
      name: 'BarCode',
      component: () => import('@/views/feature/barcode/index.vue'),
      meta: {
        title: '条形码',
        i18nKey: 'route.feature.barcode',
        icon: 'material-symbols:barcode',
        keepAlive: true,
      },
    },
    {
      path: 'calendar',
      name: 'Calendar',
      component: () => import('@/views/feature/calendar/index.vue'),
      meta: {
        title: '日历',
        i18nKey: 'route.feature.calendar',
        icon: 'material-symbols:calendar-month-outline',
        keepAlive: true,
      },
    },
    {
      path: 'chart',
      name: 'Chart',
      redirect: '/feature/chart/echarts',
      meta: {
        title: '图表',
        i18nKey: 'route.feature.chart',
        icon: 'carbon:chart-multitype',
        keepAlive: true,
      },
      children: [
        {
          path: 'echarts',
          name: 'Echarts',
          component: () => import('@/views/feature/chart/echarts/index.vue'),
          meta: {
            title: 'Echarts',
            i18nKey: 'route.feature.echarts',
            icon: 'simple-icons:apacheecharts',
            keepAlive: true,
          },
        },
        {
          path: 'vchart',
          name: 'Vchart',
          component: () => import('@/views/feature/chart/vchart/index.vue'),
          meta: {
            title: 'Vchart',
            i18nKey: 'route.feature.vchart',
            icon: 'simple-icons:v',
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: 'editor',
      name: 'Editor',
      redirect: '/feature/editor/markdown',
      meta: {
        title: '编辑器',
        i18nKey: 'route.feature.editor',
        icon: 'mdi:text-box-edit',
        keepAlive: true,
      },
      children: [
        {
          path: 'markdown',
          name: 'Markdown',
          component: () => import('@/views/feature/editor/markdown/index.vue'),
          meta: {
            title: 'markdown',
            i18nKey: 'route.feature.markdown',
            icon: 'ri:markdown-fill',
            keepAlive: true,
          },
        },
        {
          path: 'quillEditor',
          name: 'QuillEditor',
          component: () => import('@/views/feature/editor/quillEditor/index.vue'),
          meta: {
            title: 'quillEditor',
            i18nKey: 'route.feature.quillEditor',
            icon: 'hugeicons:quill-write-01',
            keepAlive: true,
          },
        },
        {
          path: 'wangEditor',
          name: 'WangEditor',
          component: () => import('@/views/feature/editor/wangEditor/index.vue'),
          meta: {
            title: 'wangEditor',
            i18nKey: 'route.feature.wangEditor',
            icon: 'mdi:file-document-edit',
            keepAlive: true,
          },
        },
      ],
    },
    {
      path: 'emoji',
      name: 'Emoji',
      component: () => import('@/views/feature/emoji/index.vue'),
      meta: {
        title: '表情包',
        i18nKey: 'route.feature.emoji',
        icon: 'material-symbols:emoji-language',
        keepAlive: true,
      },
    },
    {
      path: 'qrcode',
      name: 'Qrcode',
      component: () => import('@/views/feature/qrcode/index.vue'),
      meta: {
        title: '二维码',
        i18nKey: 'route.feature.qrcode',
        icon: 'ic:baseline-qrcode',
        keepAlive: true,
      },
    },
    {
      path: 'splitpanes',
      name: 'Splitpanes',
      component: () => import('@/views/feature/splitpanes/index.vue'),
      meta: {
        title: '拆分面板',
        i18nKey: 'route.feature.splitpanes',
        icon: 'icon-park-outline:split-cells',
        keepAlive: true,
      },
    },
    {
      path: 'text-effect',
      name: 'TextEffect',
      component: () => import('@/views/feature/text-effect/index.vue'),
      meta: {
        title: '文字效果',
        i18nKey: 'route.feature.textEffect',
        icon: 'ic:outline-text-fields',
        keepAlive: true,
      },
    },
  ],
}

export default feature

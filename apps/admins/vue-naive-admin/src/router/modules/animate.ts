import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'

const Animate: RouteRecordRaw = {
  path: '/animate',
  name: 'Animate',
  component: Layout,
  redirect: '/animate/button',
  meta: {
    title: '动画示例',
    i18nKey: 'route.animate.page',
    icon: 'material-symbols:animated-images',
    keepAlive: true,
    order: 7,
  },
  children: [
    {
      path: 'button',
      name: 'Button',
      component: () => import('@/views/animate/button/index.vue'),
      meta: {
        title: '按钮',
        i18nKey: 'route.animate.button',
        icon: 'tdesign:button-filled',
        keepAlive: true,
      },
    },
    {
      path: 'loading',
      name: 'Loading',
      component: () => import('@/views/animate/loading/index.vue'),
      meta: {
        title: '加载',
        i18nKey: 'route.animate.loading',
        icon: 'hugeicons:loading-03',
        keepAlive: true,
      },
    },
  ],
}

export default Animate

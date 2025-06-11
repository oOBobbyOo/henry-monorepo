import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'

const Animate: RouteRecordRaw = {
  path: '/animate',
  name: 'Animate',
  component: BasicLayout,
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
  ],
}

export default Animate

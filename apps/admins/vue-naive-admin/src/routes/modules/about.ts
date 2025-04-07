import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'

const about: RouteRecordRaw = {
  path: '/about',
  name: 'About',
  component: BasicLayout,
  meta: {
    title: '关于',
  },
  children: [
    {
      path: 'index',
      name: 'AboutIndex',
      component: () => import('@/views/about/index.vue'),
      meta: {
        title: '关于',
      },
    },
  ],
}

export default about

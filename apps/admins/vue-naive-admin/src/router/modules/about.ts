import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'

const about: RouteRecordRaw = {
  path: '/about',
  name: 'About',
  component: BasicLayout,
  redirect: '/about/index',
  meta: {
    title: '关于',
    i18nKey: 'route.about',
    icon: 'fluent:book-information-24-regular',
    keepAlive: true,
    order: 10,
  },
  children: [
    {
      path: 'index',
      name: 'AboutIndex',
      component: () => import('@/views/about/index.vue'),
      meta: {
        title: '关于',
        i18nKey: 'route.about',
        icon: 'fluent:book-information-24-regular',
        keepAlive: true,
      },
    },
  ],
}

export default about

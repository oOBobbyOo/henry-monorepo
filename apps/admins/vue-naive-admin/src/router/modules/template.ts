import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'

const template: RouteRecordRaw = {
  path: '/template',
  name: 'Template',
  component: BasicLayout,
  redirect: '/template/banner',
  meta: {
    title: '模板示例',
    i18nKey: 'route.template.page',
    icon: 'tabler:template',
    keepAlive: true,
    order: 6,
  },
  children: [
    {
      path: 'banner',
      name: 'Banner',
      component: () => import('@/views/template/banner/index.vue'),
      meta: {
        title: '横幅',
        i18nKey: 'route.template.banner',
        icon: 'gg:template',
        keepAlive: true,
      },
    },
  ],
}

export default template

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
        icon: 'bx:credit-card-front',
        keepAlive: true,
      },
    },
    {
      path: 'card',
      name: 'Card',
      component: () => import('@/views/template/card/index.vue'),
      meta: {
        title: '卡片',
        i18nKey: 'route.template.card',
        icon: 'fluent:contact-card-16-regular',
        keepAlive: true,
      },
    },
  ],
}

export default template

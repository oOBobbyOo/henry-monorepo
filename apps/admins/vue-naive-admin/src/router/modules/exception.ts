import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'

const exception: RouteRecordRaw = {
  path: '/exception',
  name: 'Exception',
  component: BasicLayout,
  redirect: '/exception/403',
  meta: {
    title: '异常页',
    i18nKey: 'route.exception.page',
    icon: 'ant-design:exception-outlined',
    keepAlive: true,
    order: 8,
  },
  children: [
    {
      path: '403',
      name: 'Exception403',
      component: () => import('@/views/exception/403/index.vue'),
      meta: {
        title: '403',
        i18nKey: 'route.exception.403',
        icon: 'ic:baseline-block',
        keepAlive: true,
      },
    },
    {
      path: '404',
      name: 'Exception404',
      component: () => import('@/views/exception/404/index.vue'),
      meta: {
        title: '404',
        i18nKey: 'route.exception.404',
        icon: 'ic:baseline-web-asset-off',
        keepAlive: true,
      },
    },
    {
      path: '500',
      name: 'Exception500',
      component: () => import('@/views/exception/500/index.vue'),
      meta: {
        title: '500',
        i18nKey: 'route.exception.500',
        icon: 'ic:baseline-wifi-off',
        keepAlive: true,
      },
    },
  ],
}

export default exception

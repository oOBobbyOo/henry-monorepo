import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/basic-layout/index.vue'

const dashboard: RouteRecordRaw = {
  path: '/dashboard',
  name: 'Dashboard',
  component: BasicLayout,
  redirect: '/dashboard/analysis',
  meta: {
    title: '首页',
    i18nKey: 'route.dashboard.page',
    icon: 'mdi:monitor-dashboard',
    keepAlive: true,
    order: 1,
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '分析页',
        i18nKey: 'route.dashboard.analysis',
        icon: 'icon-park-outline:analysis',

      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
        i18nKey: 'route.dashboard.workbench',
        icon: 'icon-park-outline:workbench',
        keepAlive: true,
      },
    },
  ],
}

export default dashboard

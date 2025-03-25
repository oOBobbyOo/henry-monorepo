import BasicLayout from '@/layouts/basic-layout/index.vue'

const dashboard = {
  path: '/dashboard',
  name: 'Dashboard',
  component: BasicLayout,
  meta: {
    title: '首页',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: '分析页',
      },
    },
  ],
}

export default dashboard

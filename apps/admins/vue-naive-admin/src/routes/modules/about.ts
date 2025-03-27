import BasicLayout from '@/layouts/basic-layout/index.vue'

const about = {
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

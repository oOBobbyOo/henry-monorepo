import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'

const manage: RouteRecordRaw = {
  path: '/manage',
  name: 'Manage',
  component: Layout,
  redirect: '/manage/user',
  meta: {
    title: '系统管理',
    i18nKey: 'route.manage.system',
    icon: 'carbon:cloud-service-management',
    keepAlive: true,
    order: 9,
  },
  children: [
    {
      path: 'user',
      name: 'UserManage',
      component: () => import('@/views/manage/user-manage/index.vue'),
      meta: {
        title: '用户管理',
        i18nKey: 'route.manage.user',
        icon: 'ic:round-manage-accounts',
        keepAlive: true,
      },
    },
    {
      path: 'role',
      name: 'RoleManage',
      component: () => import('@/views/manage/role-manage/index.vue'),
      meta: {
        title: '角色管理',
        i18nKey: 'route.manage.role',
        icon: 'carbon:user-role',
        keepAlive: true,
      },
    },
    {
      path: 'menu',
      name: 'MenuManage',
      component: () => import('@/views/manage/menu-manage/index.vue'),
      meta: {
        title: '菜单管理',
        i18nKey: 'route.manage.menu',
        icon: 'material-symbols:route',
        keepAlive: true,
      },
    },
  ],
}

export default manage

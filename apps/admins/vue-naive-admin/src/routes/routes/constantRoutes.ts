import type { RouteRecordRaw } from 'vue-router'

// 根路由
const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root',
  },
}

const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
}

const NotFound: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/views/not-found/index.vue'),
  meta: {
    title: '找不到页面',
  },
}

export const constantRoutes = [RootRoute, LoginRoute, NotFound]

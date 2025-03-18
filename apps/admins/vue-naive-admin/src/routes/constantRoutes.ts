// 根路由
export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root',
  },
}

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录',
  },
}

export const NotFound = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  meta: {
    title: '找不到页面',
  },
}

import type { IRouteObject } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'

const LoginRoute: IRouteObject = {
  path: '/login',
  element: (
    <LazyLoadComponent
      Component={lazy(() => import('@/pages/login'))}
    />
  ),
  meta: {
    title: '登录',
  },
}

const NotFound: IRouteObject = {
  path: '*',
  element: (
    <LazyLoadComponent
      Component={lazy(() => import('@/pages/not-found'))}
    />
  ),
  meta: {
    title: '找不到页面',
  },
}

export const constantRoutes = [LoginRoute, NotFound]

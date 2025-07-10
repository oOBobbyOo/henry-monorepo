import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'

const LoginRoute: Router.RouteObject = {
  path: '/login',
  element: (
    <LazyLoadComponent Component={lazy(() => import('@/pages/login'))} />
  ),
  meta: {
    name: 'login',
    title: '登录',
  },
}

const NotFound: Router.RouteObject = {
  path: '*',
  element: (
    <LazyLoadComponent Component={lazy(() => import('@/pages/not-found'))} />
  ),
  meta: {
    name: 'not-fount',
    title: '找不到页面',
  },
}

export const constantRoutes = [LoginRoute, NotFound]

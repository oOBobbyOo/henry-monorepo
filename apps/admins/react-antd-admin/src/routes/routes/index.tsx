import type { Router } from '@/types/router'
import Layout from '@/layouts'
import RedirectRouteView from '../RedirectRouteView'
import { constantRoutes } from './constantRoutes'
import { dynamicRoutes } from './dynamicRoutes'

// 根路由
const RootRoute: Router.RouteObject = {
  path: '/',
  element: <Layout />,
  meta: {
    name: 'root',
    title: 'Root',
  },
  children: [
    {
      index: true,
      element: <RedirectRouteView to="/dashboard/analysis" />,
    },
    ...dynamicRoutes,
  ],
}

export const routes = [RootRoute, ...constantRoutes]

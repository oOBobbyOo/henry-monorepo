import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'
import RedirectRouteView from '../RedirectRouteView'

const dashboard: Router.RouteObject = {
  path: '/dashboard',
  meta: {
    name: 'dashboard',
    title: '首页',
    i18nKey: 'route.dashboard.page',
    icon: 'mdi:monitor-dashboard',
    order: 1,
  },
  children: [
    {
      index: true,
      element: <RedirectRouteView to="/dashboard/analysis" />,
      meta: {
        hideInMenu: true,
      },
    },
    {
      path: 'analysis',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/dashboard/analysis'))}
        />
      ),
      meta: {
        name: 'analysis',
        title: '分析页',
        i18nKey: 'route.dashboard.analysis',
        icon: 'icon-park-outline:analysis',
      },
    },
    {
      path: 'workbench',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/dashboard/workbench'))}
        />
      ),
      meta: {
        name: 'workbench',
        title: '工作台',
        i18nKey: 'route.dashboard.workbench',
        icon: 'icon-park-outline:workbench',
      },
    },
  ],
}

export default dashboard

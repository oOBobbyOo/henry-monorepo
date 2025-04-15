import type { IRouteObject } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'
import RedirectRouteView from '../RedirectRouteView'

const dashboard: IRouteObject = {
  path: '/dashboard',
  meta: {
    title: '首页',
    i18nKey: 'route.dashboard',
    icon: 'mdi:monitor-dashboard',
  },
  children: [
    {
      index: true,
      element: <RedirectRouteView to="/dashboard/analysis" />,
    },
    {
      path: 'analysis',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/dashboard/analysis'))}
        />
      ),
      meta: {
        title: '分析页',
        i18nKey: 'route.analysis',
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
        title: '工作台',
        i18nKey: 'route.workbench',
        icon: 'icon-park-outline:workbench',
      },
    },
  ],
}

export default dashboard

import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'
import RedirectRouteView from '../RedirectRouteView'

const feature: Router.RouteObject = {
  path: '/feature',
  meta: {
    name: 'feature',
    title: '功能示例',
    i18nKey: 'feature.page',
    icon: 'cil:featured-playlist',
    keepAlive: true,
    order: 5,
  },
  children: [
    {
      index: true,
      element: <RedirectRouteView to="/feature/barcode" />,
      meta: {
        hideInMenu: true,
      },
    },
    {
      path: 'barcode',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/feature/barcode'))}
        />
      ),
      meta: {
        name: 'barcode',
        title: '条形码',
        i18nKey: 'feature.barcode',
        icon: 'material-symbols:barcode',
        keepAlive: true,
      },
    },
    {
      path: 'calendar',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/feature/calendar'))}
        />
      ),
      meta: {
        name: 'calendar',
        title: '条形码',
        i18nKey: 'feature.calendar',
        icon: 'material-symbols:calendar-month-outline',
        keepAlive: true,
      },
    },
  ],
}

export default feature

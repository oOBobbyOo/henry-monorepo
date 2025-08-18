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
        title: '日历',
        i18nKey: 'feature.calendar',
        icon: 'material-symbols:calendar-month-outline',
        keepAlive: true,
      },
    },
    {
      path: 'chart',
      meta: {
        name: 'chart',
        title: '图表',
        i18nKey: 'feature.chart',
        icon: 'carbon:chart-multitype',
        keepAlive: true,
      },
      children: [
        {
          index: true,
          element: <RedirectRouteView to="/feature/chart/echarts" />,
          meta: {
            hideInMenu: true,
          },
        },
        {
          path: 'echarts',
          element: (
            <LazyLoadComponent
              Component={lazy(() => import('@/pages/feature/chart/echarts'))}
            />
          ),
          meta: {
            name: 'echarts',
            title: 'Echarts',
            i18nKey: 'feature.echarts',
            icon: 'simple-icons:apacheecharts',
            keepAlive: true,
          },
        },
        {
          path: 'antv',
          element: (
            <LazyLoadComponent
              Component={lazy(() => import('@/pages/feature/chart/antv'))}
            />
          ),
          meta: {
            name: 'antv',
            title: 'Antv',
            i18nKey: 'feature.antv',
            icon: 'simple-icons:antv',
            keepAlive: true,
          },
        },
      ],
    },
  ],
}

export default feature

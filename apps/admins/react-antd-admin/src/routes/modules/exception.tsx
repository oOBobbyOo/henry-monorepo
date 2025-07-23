import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'
import RedirectRouteView from '../RedirectRouteView'

const exception: Router.RouteObject = {
  path: '/exception',
  meta: {
    name: 'exception',
    title: '异常页',
    i18nKey: 'route.exception.page',
    icon: 'ant-design:exception-outlined',
    keepAlive: true,
    order: 8,
  },
  children: [
    {
      index: true,
      element: <RedirectRouteView to="/exception/403" />,
      meta: {
        hideInMenu: true,
      },
    },
    {
      path: '403',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/exception/403'))}
        />
      ),
      meta: {
        name: '403',
        title: '403',
        i18nKey: 'route.exception.403',
        icon: 'ic:baseline-block',
        keepAlive: true,
      },
    },
    {
      path: '404',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/exception/404'))}
        />
      ),
      meta: {
        name: '404',
        title: '404',
        i18nKey: 'route.exception.404',
        icon: 'ic:baseline-web-asset-off',
        keepAlive: true,
      },
    },
    {
      path: '500',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/exception/500'))}
        />
      ),
      meta: {
        name: '500',
        title: '500',
        i18nKey: 'route.exception.500',
        icon: 'ic:baseline-wifi-off',
        keepAlive: true,
      },
    },
  ],
}

export default exception

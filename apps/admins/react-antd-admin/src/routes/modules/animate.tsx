import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'
import RedirectRouteView from '../RedirectRouteView'

const animate: Router.RouteObject = {
  path: '/animate',
  meta: {
    name: 'animate',
    title: '动画示例',
    i18nKey: 'animate.page',
    icon: 'material-symbols:animated-images',
    order: 7,
  },
  children: [
    {
      index: true,
      element: <RedirectRouteView to="/animate/button" />,
      meta: {
        hideInMenu: true,
      },
    },
    {
      path: 'button',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/animate/button'))}
        />
      ),
      meta: {
        name: 'button',
        title: '按钮',
        i18nKey: 'animate.button',
        icon: 'tdesign:button-filled',
        keepAlive: true,
      },
    },
    {
      path: 'loading',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/animate/loading'))}
        />
      ),
      meta: {
        name: 'loading',
        title: '加载',
        i18nKey: 'animate.loading',
        icon: 'hugeicons:loading-03',
        keepAlive: true,
      },
    },
    {
      path: 'motion',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/animate/motion'))}
        />
      ),
      meta: {
        name: 'motion',
        title: 'Motion',
        i18nKey: 'animate.motion',
        icon: 'hugeicons:loading-03',
        keepAlive: true,
      },
    },
  ],
}

export default animate

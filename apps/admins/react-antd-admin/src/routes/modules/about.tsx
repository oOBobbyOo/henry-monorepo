import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'

const about: Router.RouteObject = {
  path: '/about',
  meta: {
    name: 'about',
    title: '关于',
    i18nKey: 'about',
    icon: 'fluent:book-information-24-regular',
    order: 10,
  },
  element: (
    <LazyLoadComponent Component={lazy(() => import('@/pages/about'))} />
  ),
}

export default about

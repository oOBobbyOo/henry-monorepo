import type { IRouteObject } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'

const about: IRouteObject = {
  path: '/about',
  meta: {
    title: '关于',
    i18nKey: 'route.about',
    icon: 'fluent:book-information-24-regular',
  },
  element: (
    <LazyLoadComponent Component={lazy(() => import('@/pages/about'))} />
  ),
}

export default about

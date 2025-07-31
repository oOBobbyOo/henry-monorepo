import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'

const grid: Router.RouteObject = {
  path: '/grid',
  meta: {
    name: 'grid',
    title: '栅格',
    i18nKey: 'grid.page',
    icon: 'lucide-lab:layout-grid-move-horizontal',
    order: 1,
  },
  element: <LazyLoadComponent Component={lazy(() => import('@/pages/grid'))} />,
}

export default grid

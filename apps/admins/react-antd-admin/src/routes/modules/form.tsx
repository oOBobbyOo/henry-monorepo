import type { Router } from '@/types/router'
import { lazy } from 'react'
import LazyLoadComponent from '../LazyLoadComponent'
import RedirectRouteView from '../RedirectRouteView'

const form: Router.RouteObject = {
  path: '/form',
  meta: {
    name: 'form',
    title: '表单',
    i18nKey: 'form.page',
    icon: 'material-symbols:contract-edit-outline',
    order: 2,
  },
  children: [
    {
      index: true,
      element: <RedirectRouteView to="/form/basic" />,
      meta: {
        hideInMenu: true,
      },
    },
    {
      path: 'basic',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/form/basic-form'))}
        />
      ),
      meta: {
        name: 'basic-form',
        title: '基础表单',
        i18nKey: 'form.basicForm',
        icon: 'mdi:archive-edit-outline',
      },
    },
    {
      path: 'step',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/form/step-form'))}
        />
      ),
      meta: {
        name: 'step-form',
        title: '分步表单',
        i18nKey: 'form.stepForm',
        icon: 'material-symbols:rebase-edit-outline',
      },
    },
    {
      path: 'query',
      element: (
        <LazyLoadComponent
          Component={lazy(() => import('@/pages/form/query-form'))}
        />
      ),
      meta: {
        name: 'query-form',
        title: '查询表单',
        i18nKey: 'form.queryForm',
        icon: 'material-symbols:edit-road-outline',
      },
    },
  ],
}

export default form

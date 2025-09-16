import type { Router } from '@/types/router'
import { useSvgIcon } from '@/hooks/useSvgIcon'
import { dynamicRoutes } from '@/routes/routes/dynamicRoutes'
import { useTranslation } from 'react-i18next'

/**
 * sort route by order
 */
function sortRouteByOrder(route: Router.RouteObject) {
  if (route.children?.length) {
    route.children.sort((next: Router.RouteObject, prev: Router.RouteObject) => (Number(next.meta?.order) || 0) - (Number(prev.meta?.order) || 0))
    route.children.forEach(sortRouteByOrder)
  }

  return route
}

/**
 * sort routes by order
 */
export function sortRoutesByOrder(routes: Router.RouteObject[]) {
  routes.sort((next, prev) => (Number(next.meta?.order) || 0) - (Number(prev.meta?.order) || 0))
  routes.forEach(sortRouteByOrder)

  return routes
}

export function generateRoute(route: Router.RouteObject, parentPath?: string) {
  const { path } = route
  const routePath = parentPath ? `${parentPath}/${path}` : `${path}`
  const newRoute: Router.RouteObject = {
    ...route,
    path: routePath,
  }
  return newRoute
}

export function generateRoutes(routes: Router.RouteObject[], parentPath?: string) {
  const result: Router.RouteObject[] = []

  for (const route of routes) {
    const children = route.children
    if (route.path) {
      const newNode = generateRoute(route, parentPath)
      if (children && children.length) {
        const path = parentPath ? `${parentPath}/${route.path}` : route.path
        const filteredChildren = generateRoutes(children, path)
        if (filteredChildren?.length) {
          newNode.children = filteredChildren
        }
      }
      result.push(newNode)
    }
    else if (children && children.length) {
      result.push(...generateRoutes(children))
    }
  }

  return result
}

export function getRoutes() {
  const routes = sortRoutesByOrder(dynamicRoutes)
  return generateRoutes(routes)
}

export function flattenRoutes(routes: Router.RouteObject[]) {
  return routes.reduce((acc: Router.RouteObject[], route: Router.RouteObject) => {
    acc.push(route)
    if (route.children && route.children.length > 0) {
      acc.push(...flattenRoutes(route.children))
    }
    return acc
  }, [])
}

export function generateMenu(route: Router.RouteObject) {
  const { SvgIconVNode } = useSvgIcon()
  const { t } = useTranslation('route')

  const { name, title, i18nKey, icon, iconFontSize } = route.meta ?? {}
  const label = i18nKey ? t(i18nKey) : title!

  const menu: App.Global.Menu = {
    label,
    i18nKey,
    routeKey: name as string,
    routePath: route.path as string,
    icon: SvgIconVNode({ icon, fontSize: iconFontSize || 20 }),
  }

  return menu
}

export function generateMenus(routes: Router.RouteObject[]) {
  const menus: App.Global.Menu[] = []

  for (const route of routes) {
    const children = route.children?.filter((child: Router.RouteObject) => !child.meta?.hideInMenu)
    if (route.path && !route.meta?.hideInMenu) {
      const newNode = generateMenu(route)
      if (children && children.length) {
        const filteredChildren = generateMenus(children)
        if (filteredChildren?.length) {
          newNode.children = filteredChildren
        }
      }
      menus.push(newNode)
    }
    else if (children && children.length) {
      menus.push(...generateMenus(children))
    }
  }

  return menus
}

export function generateMenuItems(menus: App.Global.Menu[]): App.Global.MenuItem[] {
  return menus.map((item: App.Global.Menu) => {
    return {
      key: item.routeKey,
      label: item.label,
      icon: item.icon,
      children: item.children && generateMenuItems(item.children || []),
    }
  })
}

export function getSelectedMenu(key: keyof App.Global.Menu, value: string, menus: App.Global.Menu[]) {
  const findMenuItem = (items: App.Global.Menu[]): App.Global.Menu | null => {
    for (const item of items) {
      if (item[key] === value) {
        return item
      }
      if (item.children && item.children.length > 0) {
        const result = findMenuItem(item.children)
        if (result) {
          return result
        }
      }
    }
    return null
  }

  return findMenuItem(menus)
}

export function getSelectedOpenKeys(menu: App.Global.Menu) {
  const arrs = menu.routePath.split('/')
  const openKeys = arrs.slice(1, -1)
  return openKeys
}

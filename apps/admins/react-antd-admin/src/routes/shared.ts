import type { Router } from '@/types/router'
import { useSvgIcon } from '@/hooks/useSvgIcon'
import { $t } from '@/locales'

/**
 * sort route by order
 * @param route route
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
 * @param routes routes
 */
export function sortRoutesByOrder(routes: Router.RouteObject[]) {
  routes.sort((next, prev) => (Number(next.meta?.order) || 0) - (Number(prev.meta?.order) || 0))
  routes.forEach(sortRouteByOrder)

  return routes
}

export function generateMenu(route: Router.RouteObject, parentPath?: string) {
  const { SvgIconVNode } = useSvgIcon()

  const { path } = route
  const { name, title, i18nKey, icon, iconFontSize } = route.meta ?? {}
  const label = i18nKey ? $t(i18nKey) : title!
  const routePath = parentPath ? `${parentPath}/${path}` : path as string

  const menu: App.Global.Menu = {
    label,
    i18nKey,
    routeKey: name as string,
    routePath,
    icon: SvgIconVNode({ icon, fontSize: iconFontSize || 20 }),
  }

  return menu
}

export function generateMenus(routes: Router.RouteObject[], parentPath?: string) {
  const menus: App.Global.Menu[] = []

  routes.forEach((route: Router.RouteObject) => {
    if (!route.meta?.hideInMenu) {
      let menu = generateMenu(route, parentPath)

      if (route.children?.some((child: Router.RouteObject) => !child.meta?.hideInMenu)) {
        menu.children = generateMenus(route.children, route.path)
      }

      if (menu.children?.length === 1) {
        menu = menu.children[0]
      }

      menus.push(menu)
    }
  })

  return menus
}

export function getSelectedMenuKeyPathByKey(selectedKey: string, menus: App.Global.Menu[]) {
  let keyPath: string = ''

  menus.forEach((menu: App.Global.Menu) => {
    if (menu.routeKey === selectedKey) {
      keyPath = menu.routePath
    }
    else if (menu.children?.length) {
      keyPath = getSelectedMenuKeyPathByKey(selectedKey, menu.children)
    }
  })

  return keyPath
}

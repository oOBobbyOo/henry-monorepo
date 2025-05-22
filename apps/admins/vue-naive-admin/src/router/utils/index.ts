import type { RouteRecordRaw, RouterHistory, RouterMode } from 'vue-router'
import { useSvgIcon } from '@/hooks/useSvgIcon'
import { $t } from '@/locales'
import { createMemoryHistory, createWebHashHistory, createWebHistory } from 'vue-router'

export function getHistory(mode: RouterMode, baseUrl?: string) {
  const map: Map<RouterMode, RouterHistory> = new Map()
  map.set('web', createWebHistory(baseUrl))
  map.set('hash', createWebHashHistory(baseUrl))
  map.set('memory', createMemoryHistory(baseUrl))
  return map.get(mode) as RouterHistory
}

/**
 * sort route by order
 * @param route route
 */
function sortRouteByOrder(route: RouteRecordRaw) {
  if (route.children?.length) {
    route.children.sort((next, prev) => (Number(next.meta?.order) || 0) - (Number(prev.meta?.order) || 0))
    route.children.forEach(sortRouteByOrder)
  }

  return route
}

/**
 * sort routes by order
 * @param routes routes
 */
export function sortRoutesByOrder(routes: RouteRecordRaw[]) {
  routes.sort((next, prev) => (Number(next.meta?.order) || 0) - (Number(prev.meta?.order) || 0))
  routes.forEach(sortRouteByOrder)

  return routes
}

export function generateMenu(route: RouteRecordRaw, parentPath?: string) {
  const { SvgIconVNode } = useSvgIcon()

  const { name, path } = route
  const { title, i18nKey, icon } = route.meta ?? {}
  const label = i18nKey ? $t(i18nKey) : title!
  const routePath = parentPath ? `${parentPath}/${path}` : path

  const menu: App.Global.Menu = {
    key: name as string,
    label,
    i18nKey,
    routeKey: name,
    routePath,
    icon: SvgIconVNode({ icon }),
  }

  return menu
}

export function generateMenus(routes: RouteRecordRaw[], parentPath?: string) {
  const menus: App.Global.Menu[] = []

  routes.forEach((route) => {
    if (!route.meta?.hideInMenu) {
      let menu = generateMenu(route, parentPath)

      if (route.children?.some(child => !child.meta?.hideInMenu)) {
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

export function findMenuPath(targetKey: string, menu: App.Global.Menu) {
  const path: string[] = []

  function dfs(item: App.Global.Menu): boolean {
    path.push(item.key)

    if (item.key === targetKey) {
      return true
    }

    if (item.children) {
      for (const child of item.children) {
        if (dfs(child)) {
          return true
        }
      }
    }

    path.pop()

    return false
  }

  if (dfs(menu)) {
    return path
  }

  return null
}

export function getSelectedMenuKeyPathByKey(selectedKey: string, menus: App.Global.Menu[]) {
  const keyPath: string[] = []

  menus.some((menu) => {
    const path = findMenuPath(selectedKey, menu)

    const find = Boolean(path?.length)

    if (find) {
      keyPath.push(...path!)
    }

    return find
  })

  return keyPath
}

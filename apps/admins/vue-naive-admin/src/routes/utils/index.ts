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
    routeKey: name as string,
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

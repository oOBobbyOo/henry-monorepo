import type { Router } from '@/types/router'
import { $t } from '@/locales'
import { flattenRoutes, getRoutes } from '@/routes/shared'

/**
 * Get route by pathname
 * @param pathname
 */
export function getRouteByPathName(pathname: string) {
  const routes = getRoutes()
  const flatRoutes = flattenRoutes(routes)
  const route = flatRoutes.find(route => route.path === pathname)
  if (!route)
    return {}
  return route
}

/**
 * Get tab by route
 * @param route
 */
export function getTabByRoute(route: Router.RouteObject) {
  const { name, title, i18nKey, icon } = route.meta ?? {}
  const label = i18nKey ? $t(`route:${i18nKey}`) : title!

  const tab: App.Global.Tab = {
    label,
    i18nKey,
    routeKey: name as string,
    routePath: route.path as string,
    icon,
  }

  return tab
}

/**
 * Is tab in tabs
 * @param routeKey
 * @param tabs
 */
export function isTabInTabs(routeKey: string, tabs: App.Global.Tab[]) {
  return tabs.some(tab => tab.routeKey === routeKey)
}

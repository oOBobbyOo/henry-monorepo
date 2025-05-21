import type { Route } from 'vue-router'
import { $t } from '@/locales'

/**
 * Get tab id by route
 * @param route
 */
function getTabIdByRoute(route: Route) {
  const { path, query = {}, meta } = route
  let id = path
  if (meta.multiTab) {
    const queryKeys = Object.keys(query).sort()
    const qs = queryKeys.map(key => `${key}=${query[key]}`).join('&')
    id = `${path}?${qs}`
  }
  return id
}

/**
 * Get tab by route
 * @param route
 */
export function getTabByRoute(route: Route) {
  const { name, path, fullPath, meta } = route
  const { title, i18nKey, icon } = meta
  const label = i18nKey ? $t(i18nKey) : title as string

  const tab: App.Global.Tab = {
    id: getTabIdByRoute(route),
    label,
    i18nKey,
    routeKey: name,
    routePath: path,
    fullPath,
    icon,
  }

  return tab
}

/**
 * Is tab in tabs
 * @param tabId
 * @param tabs
 */
export function isTabInTabs(tabId: string, tabs: App.Global.Tab[]) {
  return tabs.some(tab => tab.id === tabId)
}

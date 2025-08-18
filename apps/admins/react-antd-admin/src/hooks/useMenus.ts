import { dynamicRoutes } from '@/routes/routes/dynamicRoutes'
import { generateMenuItems, generateMenus, sortRoutesByOrder } from '@/routes/shared'

export function useMenus() {
  const routes = sortRoutesByOrder(dynamicRoutes)
  const menus = generateMenus(routes)
  const menuItems = generateMenuItems(menus)

  return { menus, menuItems }
}

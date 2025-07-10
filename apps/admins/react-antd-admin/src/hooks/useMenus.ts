import { dynamicRoutes } from '@/routes/routes/dynamicRoutes'
import { generateMenus, sortRoutesByOrder } from '@/routes/shared'

export function useMenus() {
  const routes = sortRoutesByOrder(dynamicRoutes)
  const menus = generateMenus(routes)

  return { menus }
}

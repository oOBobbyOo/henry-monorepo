import { dynamicRoutes } from '@/router/routes/dynamicRoutes'
import { generateMenus, sortRoutesByOrder } from '@/router/utils'
import { defineStore } from 'pinia'

export const useRouteStore = defineStore('route', () => {
  const routes = sortRoutesByOrder(dynamicRoutes)

  const menus: App.Global.Menu[] = generateMenus(routes)

  return {
    menus,
  }
})

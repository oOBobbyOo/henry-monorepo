import { dynamicRoutes } from '@/routes/routes/dynamicRoutes'
import { generateMenus } from '@/routes/utils'
import { defineStore } from 'pinia'

export const useRouteStore = defineStore('route', () => {
  const routes = dynamicRoutes

  const menus: App.Global.Menu[] = generateMenus(routes)

  return {
    menus,
  }
})

import { generateMenuItems, generateMenus, getRoutes } from '@/routes/shared'

export function useMenus() {
  const routes = getRoutes()
  const menus = generateMenus(routes)
  const menuItems = generateMenuItems(menus)

  return { menus, menuItems }
}

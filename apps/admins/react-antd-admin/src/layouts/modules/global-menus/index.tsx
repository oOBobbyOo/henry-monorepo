import type { MenuProps } from 'antd'
import { useMenus } from '@/hooks/useMenus'
import { useRouterPush } from '@/hooks/useRouterPush'
import { getSelectedMenuKeyPathByKey } from '@/routes/shared'
import { Menu } from 'antd'
import { useMemo } from 'react'

type MenuItem = Required<MenuProps>['items'][number]

function GlobalMenus() {
  const { navigate } = useRouterPush()

  const { menus } = useMenus()

  const items: MenuItem[] = useMemo(() => {
    return menus.map((item) => {
      return {
        key: item.routeKey,
        label: item.label,
        icon: item.icon,
        children:
          item.children
          && item.children.map((child) => {
            return {
              key: child.routeKey,
              label: child.label,
              icon: child.icon,
            }
          }),
      }
    })
  }, [menus])

  const handleClickMenu: MenuProps['onSelect'] = ({ key }) => {
    const routePath = getSelectedMenuKeyPathByKey(key, menus)
    navigate(routePath)
  }

  return <Menu items={items} mode="inline" onSelect={handleClickMenu} />
}

export default GlobalMenus

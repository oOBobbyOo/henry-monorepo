import type { MenuProps } from 'antd'
import type { FC } from 'react'
import { useMenus } from '@/hooks/useMenus'
import { useResponsive } from '@/hooks/useResponsive'
import { useRouterPush } from '@/hooks/useRouterPush'
import { getSelectedMenu } from '@/routes/shared'
import { useAppDispatch } from '@/stores/hook'
import { setSiderCollapse } from '@/stores/modules/app/slice'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'

const GlobalMenus: FC<{
  collapsed: boolean
}> = ({ collapsed }) => {
  const { navigate, pathname } = useRouterPush()
  const { isMobile } = useResponsive()
  const dispatch = useAppDispatch()

  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const { menus, menuItems } = useMenus()

  const handleClickMenu: MenuProps['onSelect'] = ({ key, selectedKeys }) => {
    if (isMobile) {
      dispatch(setSiderCollapse(false))
    }

    setSelectedKeys(selectedKeys)

    const menu = getSelectedMenu('routeKey', key, menus)
    if (menu) {
      navigate(menu.routePath)
    }
  }

  useEffect(() => {
    const menu = getSelectedMenu('routePath', pathname, menus)
    if (menu) {
      setSelectedKeys([menu.routeKey])
    }
  }, [pathname])

  return (
    <Menu
      className="flex-1 overflow-y-auto"
      items={menuItems}
      inlineCollapsed={collapsed}
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={setOpenKeys}
      onSelect={handleClickMenu}
      style={{ border: 0 }}
    />
  )
}

export default GlobalMenus

import type { MenuProps } from 'antd'
import type { FC } from 'react'
import { useMenus } from '@/hooks/useMenus'
import { useResponsive } from '@/hooks/useResponsive'
import { useRouterPush } from '@/hooks/useRouterPush'
import { getSelectedMenuKeyPathByKey } from '@/routes/shared'
import { useAppDispatch } from '@/stores/hook'
import { setSiderCollapse } from '@/stores/modules/app/slice'
import { Menu } from 'antd'

const GlobalMenus: FC<{
  collapsed: boolean
}> = ({ collapsed }) => {
  const { navigate } = useRouterPush()
  const { isMobile } = useResponsive()
  const dispatch = useAppDispatch()

  const { menus, menuItems } = useMenus()

  const handleClickMenu: MenuProps['onSelect'] = ({ key }) => {
    const routePath = getSelectedMenuKeyPathByKey(key, menus)
    if (isMobile) {
      dispatch(setSiderCollapse(false))
    }
    navigate(routePath)
  }

  return (
    <Menu
      className="flex-1 overflow-y-auto"
      items={menuItems}
      inlineCollapsed={collapsed}
      mode="inline"
      onSelect={handleClickMenu}
      style={{ border: 0 }}
    />
  )
}

export default GlobalMenus

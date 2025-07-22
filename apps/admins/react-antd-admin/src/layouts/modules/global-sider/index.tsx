import { useResponsive } from '@/hooks/useResponsive'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getSiderCollapse, setSiderCollapse } from '@/stores/modules/app/slice'
import { getThemeSettings } from '@/stores/modules/theme/slice'
import { Layout } from 'antd'
import { useMemo } from 'react'
import GlobalLogo from '../global-logo'
import GlobalMenus from '../global-menus'

const { Sider } = Layout

function GlobalSider() {
  const { isMobile } = useResponsive()
  const dispatch = useAppDispatch()
  const siderCollapse = useAppSelector(getSiderCollapse)
  const settings = useAppSelector(getThemeSettings)

  const collapsed = useMemo(() => {
    return isMobile ? false : siderCollapse
  }, [isMobile, siderCollapse])

  return (
    <Sider
      className="global-layout-sider h-full"
      breakpoint="lg"
      onBreakpoint={(broken) => {
        dispatch(setSiderCollapse(broken))
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={settings.sider.width}
      collapsedWidth={settings.sider.collapsedWidth}
    >
      <div className="h-full flex-col">
        <GlobalLogo collapsed={collapsed} />
        <GlobalMenus collapsed={collapsed} />
      </div>
    </Sider>
  )
}

export default GlobalSider

import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getSiderCollapse, setSiderCollapse } from '@/stores/modules/app/slice'
import { getThemeSettings } from '@/stores/modules/theme/slice'
import { Layout } from 'antd'
import GlobalLogo from '../global-logo'
import GlobalMenus from '../global-menus'

const { Sider } = Layout

function GlobalSider() {
  const dispatch = useAppDispatch()
  const siderCollapse = useAppSelector(getSiderCollapse)
  const settings = useAppSelector(getThemeSettings)

  return (
    <Sider
      className="global-layout-sider"
      breakpoint="lg"
      onBreakpoint={(broken) => {
        dispatch(setSiderCollapse(broken))
      }}
      trigger={null}
      collapsible
      collapsed={siderCollapse}
      width={settings.sider.width}
      collapsedWidth={settings.sider.collapsedWidth}
    >
      <>
        <GlobalLogo collapsed={siderCollapse} />
        <GlobalMenus />
      </>
    </Sider>
  )
}

export default GlobalSider

import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getSiderCollapse, setSiderCollapse } from '@/stores/modules/app/slice'
import { getThemeSettings } from '@/stores/modules/theme/slice'
import { Drawer, Layout } from 'antd'
import GlobalContent from '../modules/global-content'

import GlobalFooter from '../modules/global-footer'
import GlobalHeader from '../modules/global-header'
import GlobalSider from '../modules/global-sider'

function MobileLayout() {
  const dispatch = useAppDispatch()
  const siderCollapse = useAppSelector(getSiderCollapse)
  const settings = useAppSelector(getThemeSettings)

  return (
    <Layout className="h-screen">
      <Drawer
        open={siderCollapse}
        placement="left"
        closeIcon={null}
        width={settings.sider.width}
        onClose={() => dispatch(setSiderCollapse(false))}
        styles={{ body: { padding: 0 } }}
      >
        <GlobalSider />
      </Drawer>

      <Layout>
        <GlobalHeader />
        <GlobalContent />
        <GlobalFooter />
      </Layout>
    </Layout>
  )
}

export default MobileLayout

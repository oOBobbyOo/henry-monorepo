import { Layout } from 'antd'
import GlobalContent from '../modules/global-content'
import GlobalFooter from '../modules/global-footer'
import GlobalHeader from '../modules/global-header'
import GlobalSider from '../modules/global-sider'
import ThemeDrawer from '../modules/theme-drawer'

function DesktopLayout() {
  return (
    <Layout className="h-screen">
      <GlobalSider />
      <Layout>
        <ThemeDrawer />
        <GlobalHeader />
        <GlobalContent />
        <GlobalFooter />
      </Layout>
    </Layout>
  )
}

export default DesktopLayout

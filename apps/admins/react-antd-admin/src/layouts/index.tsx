import { Layout as AntLayout } from 'antd'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <AntLayout className="h-screen">
      layouts
      <Outlet />
    </AntLayout>
  )
}

export default Layout

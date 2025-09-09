import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

function GlobalContent() {
  return (
    <Content className="global-layout-content flex-1 p-4 flex-col gap-4 transition-300 overflow-y-auto">
      <Outlet />
    </Content>
  )
}

export default GlobalContent

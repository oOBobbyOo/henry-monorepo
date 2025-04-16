import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

function GlobalContent() {
  return (
    <Content>
      GlobalContent
      <Outlet />
    </Content>
  )
}

export default GlobalContent

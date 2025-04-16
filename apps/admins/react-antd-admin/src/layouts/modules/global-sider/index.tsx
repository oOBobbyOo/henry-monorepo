import { Layout } from 'antd'
import { useState } from 'react'

const { Sider } = Layout

function GlobalSider() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      breakpoint="lg"
      onBreakpoint={(broken) => {
        setCollapsed(broken)
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      GlobalSider
    </Sider>
  )
}

export default GlobalSider

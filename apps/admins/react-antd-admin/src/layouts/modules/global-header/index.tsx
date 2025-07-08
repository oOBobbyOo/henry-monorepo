import { Layout } from 'antd'
import DarkSwitch from './components/DarkSwitch'
import SiderToggler from './components/SiderToggler'

const { Header } = Layout

function GlobalHeader() {
  return (
    <Header className="global-layout-header flex-between px-4">
      <SiderToggler />
      <div className="h-full flex-y-center justify-end gap-2">
        <DarkSwitch />
      </div>
    </Header>
  )
}

export default GlobalHeader

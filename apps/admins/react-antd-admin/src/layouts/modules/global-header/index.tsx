import FullScreen from '@/components/FullScreen'
import { Layout } from 'antd'
import DarkSwitch from './components/DarkSwitch'
import LangSwitch from './components/LangSwitch'
import SiderToggler from './components/SiderToggler'

const { Header } = Layout

function GlobalHeader() {
  return (
    <Header className="global-layout-header flex-between px-4">
      <SiderToggler />
      <div className="h-full flex-y-center justify-end gap-2">
        <FullScreen />
        <DarkSwitch />
        <LangSwitch />
      </div>
    </Header>
  )
}

export default GlobalHeader

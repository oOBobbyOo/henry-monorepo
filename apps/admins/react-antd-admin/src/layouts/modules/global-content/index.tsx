import { usePreviousRoute } from '@/hooks/usePreviousRoute'
import { useAppSelector } from '@/stores/hook'
import { getReloadFlag } from '@/stores/modules/app/slice'
import { Layout } from 'antd'
import { useOutlet } from 'react-router-dom'

const { Content } = Layout

function GlobalContent() {
  const previousRoute = usePreviousRoute()

  const currentOutlet = useOutlet(previousRoute)

  const reload = useAppSelector(getReloadFlag)

  return (
    <Content className="global-layout-content flex-1 p-4 flex-col gap-4 transition-300 overflow-y-auto">
      {!reload && currentOutlet}
    </Content>
  )
}

export default GlobalContent

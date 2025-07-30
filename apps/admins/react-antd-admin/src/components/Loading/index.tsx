import { Spin } from 'antd'

function Loading({ tip = 'Loading...' }: { tip?: string }) {
  return <Spin tip={tip} size="large" className="h-full flex-col-center" />
}

export default Loading

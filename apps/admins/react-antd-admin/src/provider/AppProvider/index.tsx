import type { FC, ReactNode } from 'react'
import { App } from 'antd'

function ContextHolder() {
  const { message, modal, notification } = App.useApp()
  window.$message = message
  window.$modal = modal
  window.$notification = notification
  return null
}

const AppProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <App className="h-full">
      <ContextHolder />
      {children}
    </App>
  )
}

export default AppProvider

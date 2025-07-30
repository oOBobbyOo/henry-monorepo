import type { FC, ReactNode } from 'react'
import { useAntdTheme } from '@/hooks/useAntdTheme'
import { ConfigProvider } from 'antd'

const AntdProvider: FC<{
  children: ReactNode
}> = ({ children }) => {
  const { antdTheme, antdLocale } = useAntdTheme()

  return (
    <ConfigProvider theme={antdTheme} locale={antdLocale}>
      {children}
    </ConfigProvider>
  )
}

export default AntdProvider

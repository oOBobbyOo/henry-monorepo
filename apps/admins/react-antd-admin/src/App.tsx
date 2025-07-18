import AppProvider from '@/components/AppProvider'
import { useAntdTheme } from '@/hooks/useAntdTheme'
import { Router } from '@/routes'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const { antdTheme, antdLocale } = useAntdTheme()

  return (
    <ConfigProvider theme={antdTheme} locale={antdLocale}>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ConfigProvider>
  )
}

export default App

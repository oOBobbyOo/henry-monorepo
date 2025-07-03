import AppProvider from '@/components/AppProvider'
import { Router } from '@/routes'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { getAntdTheme } from './stores/modules/theme/shared'

function App() {
  const theme = getAntdTheme()

  return (
    <ConfigProvider
      theme={theme}
    >
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ConfigProvider>
  )
}

export default App

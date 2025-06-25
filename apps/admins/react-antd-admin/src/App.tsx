import AppProvider from '@/components/AppProvider'
import { Router } from '@/routes'
import { ConfigProvider, theme } from 'antd'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
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

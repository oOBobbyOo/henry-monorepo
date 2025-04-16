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
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App

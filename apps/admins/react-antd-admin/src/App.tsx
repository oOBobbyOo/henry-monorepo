import { Router } from '@/routes'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App

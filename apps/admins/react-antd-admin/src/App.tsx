import AntdProvider from '@/provider/AntdProvider'
import AppProvider from '@/provider/AppProvider'
import { Router } from '@/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <AntdProvider>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </AntdProvider>
  )
}

export default App

import AppProvider from '@/components/AppProvider'
import { Router } from '@/routes'
import { useAppSelector } from '@/stores/hook'
import { getAntdTheme } from '@/stores/modules/theme/shared'
import { getDarkMode } from '@/stores/modules/theme/slice'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const darkMode = useAppSelector(getDarkMode)

  const theme = getAntdTheme(darkMode)

  return (
    <ConfigProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppProvider>
    </ConfigProvider>
  )
}

export default App

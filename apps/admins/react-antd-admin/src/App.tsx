import AppProvider from '@/components/AppProvider'
import { Router } from '@/routes'
import { getAntdTheme } from '@/stores/modules/theme/shared'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { useThemeScheme } from './hooks/useThemeScheme'

function App() {
  const { darkMode } = useThemeScheme()

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

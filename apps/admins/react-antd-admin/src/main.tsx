import store from '@/stores'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { setupI18n } from './locales'

import 'virtual:svg-icons-register'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import '@/styles/index.css'

async function bootstrap() {
  setupI18n()

  const root = createRoot(document.getElementById('root')!)

  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}

bootstrap()

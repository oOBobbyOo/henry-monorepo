import store from '@/stores'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import '@/styles/index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

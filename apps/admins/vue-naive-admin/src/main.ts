import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import './styles/index.css'

async function bootstrap() {
  const app = createApp(App)

  app.mount('#app')
}

bootstrap()

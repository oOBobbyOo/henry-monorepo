import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './routes'
import { setupStore } from './stores'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import './styles/index.css'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()

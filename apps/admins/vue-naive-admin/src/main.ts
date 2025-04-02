import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupRouter } from './routes'
import { setupStore } from './stores'

import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import './styles/index.css'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()

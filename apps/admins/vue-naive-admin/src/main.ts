import { createApp } from 'vue'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupRouter } from './router'
import { setupStore } from './stores'

import './plugins/assets'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)

  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()

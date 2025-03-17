import type { App } from 'vue'
import { createRouter } from 'vue-router'
import { getHistory } from './utils'

const { VITE_ROUTE_MODE = 'web', VITE_BASE_URL } = import.meta.env

export const router = createRouter({
  history: getHistory(VITE_ROUTE_MODE, VITE_BASE_URL),
  routes: [],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    else {
      return { left: 0, top: 0 }
    }
  },
})

export async function setupRouter(app: App) {
  app.use(router)

  await router.isReady()
}

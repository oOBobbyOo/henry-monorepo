import type { App } from 'vue'
import { createRouter } from 'vue-router'
import { createRouterGuard } from './guards'
import { routes } from './routes'
import { getRouterHistory } from './utils'

const { VITE_ROUTER_HISTORY_MODE = 'web', VITE_BASE_URL } = import.meta.env

export const router = createRouter({
  history: getRouterHistory(VITE_ROUTER_HISTORY_MODE, VITE_BASE_URL),
  routes,
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

  createRouterGuard(router)

  await router.isReady()
}

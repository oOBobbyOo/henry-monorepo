import type { Router } from 'vue-router'

export function createRouteGuard(router: Router) {
  router.beforeEach((_to, _from, next) => {
    next()
  })
}

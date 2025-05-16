import type { Router } from 'vue-router'

import { startProgress, stopProgress } from '@henry/utils'

export function createProgressGuard(router: Router) {
  router.beforeEach((_to, _from, next) => {
    startProgress()
    next()
  })
  router.afterEach((_to) => {
    stopProgress()
  })
}

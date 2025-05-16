import type { Router } from 'vue-router'
import { createProgressGuard } from './progress'
import { createDocumentTitleGuard } from './title'

export function createRouterGuard(router: Router) {
  createProgressGuard(router)
  createDocumentTitleGuard(router)
}

import type { Router } from 'vue-router'
import { createProgressGuard } from './progress'
import { createRouteGuard } from './route'
import { createDocumentTitleGuard } from './title'

export function createRouterGuard(router: Router) {
  createProgressGuard(router)
  createRouteGuard(router)
  createDocumentTitleGuard(router)
}

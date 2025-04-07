import type { Router } from 'vue-router'
import { createDocumentTitleGuard } from './title'

export function createRouterGuard(router: Router) {
  createDocumentTitleGuard(router)
}

import type { RouterHistory, RouterMode } from 'vue-router'
import { createMemoryHistory, createWebHashHistory, createWebHistory } from 'vue-router'

export function getHistory(mode: RouterMode, baseUrl?: string) {
  const map: Map<RouterMode, RouterHistory> = new Map()
  map.set('web', createWebHistory(baseUrl))
  map.set('hash', createWebHashHistory(baseUrl))
  map.set('memory', createMemoryHistory(baseUrl))
  return map.get(mode) as RouterHistory
}

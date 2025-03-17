import type { IRouterMap } from '@/types/router'
import type { RouterHistory } from 'vue-router'
import { createMemoryHistory, createWebHashHistory, createWebHistory } from 'vue-router'

export function getHistory(mode: IRouterMap, baseUrl?: string) {
  const map: Map<IRouterMap, RouterHistory> = new Map()
  map.set('web', createWebHistory(baseUrl))
  map.set('hash', createWebHashHistory(baseUrl))
  map.set('memory', createMemoryHistory(baseUrl))
  return map.get(mode) as RouterHistory
}

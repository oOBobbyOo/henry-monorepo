import type { RouteRecordRaw } from 'vue-router'

export type IRouterMap = 'web' | 'hash' | 'memory'

export type IRouteRecordRaw = RouteRecordRaw

export interface IModuleRaw {
  default: Array<RouteRecordRaw> | RouteRecordRaw
}

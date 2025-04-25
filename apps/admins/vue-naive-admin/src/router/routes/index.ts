import { constantRoutes } from './constantRoutes'
import { dynamicRoutes } from './dynamicRoutes'

export const routes = [...constantRoutes, ...dynamicRoutes]

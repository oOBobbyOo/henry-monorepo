import type { RouteModuleRaw, RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob<RouteModuleRaw>('../modules/**/*.ts', { eager: true })

const routeModuleList: RouteRecordRaw[] = Object.keys(modules).reduce((list: RouteRecordRaw[], key: string) => {
  const mod = modules[key]?.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  return [...list, ...modList]
}, [])

export const dynamicRoutes = [...routeModuleList]

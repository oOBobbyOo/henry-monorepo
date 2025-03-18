import type { IModuleRaw, IRouteRecordRaw } from '@/types/router'

const modules = import.meta.glob<IModuleRaw>('./modules/**/*.ts', { eager: true })

const routeModuleList: IRouteRecordRaw[] = Object.keys(modules).reduce((list: IRouteRecordRaw[], key: string) => {
  const mod = modules[key]?.default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  return [...list, ...modList]
}, [])

export const dynamicRoutes = [...routeModuleList]

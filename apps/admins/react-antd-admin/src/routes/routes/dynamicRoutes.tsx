import type { IRouteModuleRaw, IRouteObject } from '@/types/router'

const modules = import.meta.glob<IRouteModuleRaw>('../modules/**/*.tsx', {
  eager: true,
})

const routeModuleList: IRouteObject[] = Object.keys(modules).reduce(
  (list: IRouteObject[], key: string) => {
    const mod = modules[key]?.default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    return [...list, ...modList]
  },
  [],
)

export const dynamicRoutes = [...routeModuleList]

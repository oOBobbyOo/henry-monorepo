import type { Router } from '@/types/router'

const modules = import.meta.glob<Router.RouteModuleRaw>('../modules/**/*.tsx', {
  eager: true,
})

const routeModuleList: Router.RouteObject[] = Object.keys(modules).reduce(
  (list: Router.RouteObject[], key: string) => {
    const mod = modules[key]?.default || {}
    const modList = Array.isArray(mod) ? [...mod] : [mod]
    return [...list, ...modList]
  },
  [],
)

export const dynamicRoutes = [...routeModuleList]

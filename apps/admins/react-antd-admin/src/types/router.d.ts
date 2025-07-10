import type { RouteObject as RouteObjectRaw } from 'react-router-dom'

declare namespace Router {
  interface RouteMeta {
    name?: string // 路由名称
    title?: string // 标题
    i18nKey?: string // 多语言
    icon?: string // 图标
    order?: number // 序号
    requiresAuth?: boolean // 身份验证
    hideInMenu?: boolean // 菜单隐藏
    keepAlive?: boolean // 缓存
    transitionName?: string // 过渡动画
    href?: string // 外链
    query?: Record<string, string> // 路由参数
  }

  type RouteObject = RouteObjectRaw & {
    meta?: RouteMeta
    children?: (RouteObjectRaw & { meta?: RouteMeta })[]
  }

  interface RouteModuleRaw {
    default: Array<RouteObject> | RouteObject
  }
}

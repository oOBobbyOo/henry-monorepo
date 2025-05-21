import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
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

  type RouterMode = 'web' | 'hash' | 'memory'

  type Route = RouteLocationNormalizedLoaded<Name>

  interface RouteModuleRaw {
    default: Array<RouteRecordRaw> | RouteRecordRaw
  }

}

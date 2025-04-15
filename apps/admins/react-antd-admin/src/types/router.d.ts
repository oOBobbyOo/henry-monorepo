import type { RouteObject } from 'react-router-dom'

export interface IRouteObjectMeta {
  title?: string // 标题
  i18nKey?: string // 多语言
  icon?: string // 图标
  order?: number // 序号
  requiresAuth?: boolean // 身份验证
  hideInMenu?: boolean // 菜单隐藏
  transitionName?: string // 过渡动画
  href?: string // 外链
}

export type IRouteObject = RouteObject & {
  meta?: IRouteObjectMeta
  children?: (RouteObject & IRouteObjectMeta)[]
}

export interface IRouteModuleRaw {
  default: Array<IRouteObject> | IRouteObject
}

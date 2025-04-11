import type { Component } from 'vue'
import { h } from 'vue'

interface IconConfig {
  icon?: string
  color?: string
  fontSize?: number
}

type IconStyle = Partial<Pick<CSSStyleDeclaration, 'color' | 'fontSize'>>

export function useSvgIconRender(SvgIcon: Component) {
  const SvgIconVNode = (config: IconConfig) => {
    const { color, fontSize, icon } = config
    const style: IconStyle = {}

    if (color) {
      style.color = color
    }
    if (fontSize) {
      style.fontSize = `${fontSize}px`
    }
    if (!icon) {
      return undefined
    }
    return () => h(SvgIcon, { icon, style })
  }

  return {
    SvgIconVNode,
  }
}

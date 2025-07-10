import type { ReactElement } from 'react'
import { createElement } from 'react'

interface IconConfig {
  /** Iconify icon name */
  icon?: string
  /** Icon color */
  color?: string
  /** Icon size */
  fontSize?: number
}

interface Props {
  className?: string
  /** Iconify icon name */
  icon?: string
  /** Icon style */
  style?: React.CSSProperties
}

type IconStyle = Partial<Pick<CSSStyleDeclaration, 'color' | 'fontSize'>>

export function useSvgIconRender(SvgIcon: ({ className, icon, style }: Props) => ReactElement) {
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
    return createElement(SvgIcon, { icon, style })
  }

  return {
    SvgIconVNode,
  }
}

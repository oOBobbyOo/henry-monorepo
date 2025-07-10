import SvgIcon from '@/components/SvgIcon'
import { useSvgIconRender } from '@henry/rhooks'

export function useSvgIcon() {
  const { SvgIconVNode } = useSvgIconRender(SvgIcon)
  return {
    SvgIconVNode,
  }
}

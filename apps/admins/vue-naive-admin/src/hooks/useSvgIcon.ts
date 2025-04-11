import SvgIcon from '@/components/SvgIcon/index.vue'
import { useSvgIconRender } from '@henry/vhooks'

export function useSvgIcon() {
  const { SvgIconVNode } = useSvgIconRender(SvgIcon)

  return {
    SvgIconVNode,
  }
}

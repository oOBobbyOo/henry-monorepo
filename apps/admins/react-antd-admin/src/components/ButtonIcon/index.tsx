import type { TooltipProps } from 'antd'
import type { CSSProperties, FC, ReactNode } from 'react'
import SvgIcon from '@/components/SvgIcon'

import { Button, Tooltip } from 'antd'

interface Props {
  children?: ReactNode
  /** Button class */
  className?: string
  /** Iconify icon name */
  icon?: string
  /** Tooltip content */
  tooltipContent?: string
  /** Tooltip placement */
  tooltipPlacement?: TooltipProps['placement']
  /** Trigger tooltip on parent */
  triggerParent?: boolean
  /** Tooltip z-index */
  zIndex?: number
  /** Svg style */
  style?: CSSProperties
  onClick?: () => void
}

const ButtonIcon: FC<Props> = ({
  children,
  className,
  icon,
  tooltipContent,
  tooltipPlacement = 'bottom',
  triggerParent,
  zIndex = 98,
  style,
  ...rest
}) => {
  const getPopupContainer = (triggerNode: HTMLElement) => {
    return triggerParent ? triggerNode.parentElement! : document.body
  }

  return (
    <Tooltip
      getPopupContainer={getPopupContainer}
      placement={tooltipPlacement}
      title={tooltipContent}
      zIndex={zIndex}
    >
      <Button type="text" className={`text-size-lg ${className}`} {...rest}>
        <div className="flex-center gap-2">
          {children || <SvgIcon icon={icon} style={style} />}
        </div>
      </Button>
    </Tooltip>
  )
}

export default ButtonIcon

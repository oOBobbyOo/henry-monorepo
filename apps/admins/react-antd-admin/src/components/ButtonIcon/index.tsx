import type { TooltipProps } from 'antd'
import type { FC, ReactNode } from 'react'
import SvgIcon from '@/components/SvgIcon'

import { Button, Tooltip } from 'antd'

interface Props {
  className?: string
  icon?: string
  content?: string
  placement?: TooltipProps['placement']
  zIndex?: number
  onClick?: () => void
  children?: ReactNode
}

const ButtonIcon: FC<Props> = ({
  className,
  icon,
  content,
  placement = 'bottom',
  zIndex,
  children,
  ...rest
}) => {
  return (
    <Tooltip placement={placement} title={content} zIndex={zIndex}>
      <Button type="text" className={`text-size-lg ${className}`} {...rest}>
        <div className="flex-center gap-2">
          {children || <SvgIcon icon={icon} />}
        </div>
      </Button>
    </Tooltip>
  )
}

export default ButtonIcon

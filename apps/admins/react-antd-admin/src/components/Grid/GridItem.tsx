import type { ColProps } from 'antd'
import type { CSSProperties, FC, ReactNode } from 'react'
import type { Breakpoint } from './Grid'
import { Col } from 'antd'

export interface GridItemProps extends Omit<ColProps, 'span'> {
  children: ReactNode
  span?: number | Breakpoint
  className?: string
  style?: CSSProperties
}

const GridItem: FC<GridItemProps> = ({
  children,
  span = 24,
  className = '',
  style,
  ...restProps
}) => {
  const colClassName = `grid-col ${className}`.trim()

  return (
    <Col
      {...(typeof span === 'number' ? { span } : span)}
      className={colClassName}
      style={style}
      {...restProps}
    >
      {children}
    </Col>
  )
}

export default GridItem

import type { RowProps } from 'antd'
import type { CSSProperties, FC, ReactNode } from 'react'
import { Row } from 'antd'

// 响应式断点配置
export interface Breakpoint {
  xs?: number // < 576px
  sm?: number // ≥ 576px
  md?: number // ≥ 768px
  lg?: number // ≥ 992px
  xl?: number // ≥ 1200px
  xxl?: number // ≥ 1600px
}

export interface GridProps extends Omit<RowProps, 'gutter'> {
  children: ReactNode
  gutter?: number | [number, number] | Breakpoint
  className?: string
  style?: CSSProperties
}

const Grid: FC<GridProps> = ({
  children,
  gutter = 16,
  className = '',
  style,
  ...restProps
}) => {
  const rowClassName = `grid-row ${className}`.trim()

  return (
    <Row gutter={gutter} className={rowClassName} style={style} {...restProps}>
      {children}
    </Row>
  )
}

export default Grid

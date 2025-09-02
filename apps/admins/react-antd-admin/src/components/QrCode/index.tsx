import type { CSSProperties, FC } from 'react'
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react'
import { useMemo } from 'react'

export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H'

interface BaseQrCodeProps {
  /** 二维码内容 */
  value: string
  /** 二维码尺寸，默认 128 */
  size?: number
  /** 背景色，默认 #FFFFFF */
  bgColor?: string
  /** 前景色，默认 #000000 */
  fgColor?: string
  /** 边距大小，默认 4 */
  marginSize?: number
  /** 错误修正级别 L: 低 ~7%, M: 中 ~15%, Q: 较高 ~25%, H: 最高 ~30% */
  level?: ErrorCorrectionLevel
  /** 是否包含透明背景，默认 false */
  includeMargin?: boolean
  /** Logo 图片设置 */
  imageSettings?: {
    /** 图片 URL */
    src: string
    /** 图片高度 */
    height: number
    /** 图片宽度 */
    width: number
    /** 是否挖空背景以防止遮挡 */
    excavate: boolean
    /** X 轴位置（相对于中心） */
    x?: number
    /** Y 轴位置（相对于中心） */
    y?: number
  }
  /** 组件样式 */
  style?: CSSProperties
  /** 组件类名 */
  className?: string
}

interface QrCodeSVGProps extends BaseQrCodeProps {
  /** 渲染类型 */
  renderAs?: 'svg'
}

interface QrCodeCanvasProps extends BaseQrCodeProps {
  /** 渲染类型 */
  renderAs: 'canvas'
}

export type QrCodeProps = QrCodeSVGProps | QrCodeCanvasProps

/**
 * 根据内容长度自动计算错误修正级别
 */
function getErrorCorrectionLevel(value: string): ErrorCorrectionLevel {
  const length = value.length
  if (length < 10)
    return 'L'
  if (length < 20)
    return 'M'
  if (length < 30)
    return 'Q'
  return 'H'
}

const QrCode: FC<QrCodeProps> = ({
  value,
  size = 128,
  bgColor = '#FFFFFF',
  fgColor = '#000000',
  marginSize = 4,
  level,
  includeMargin = true,
  imageSettings,
  style,
  className,
  renderAs = 'svg',
}) => {
  const errorCorrectionLevel = level || getErrorCorrectionLevel(value)

  const commonProps = useMemo(() => ({
    value,
    size,
    bgColor,
    fgColor,
    marginSize,
    level: errorCorrectionLevel,
    includeMargin,
    imageSettings,
    style,
    className,
  }), [
    value,
    size,
    bgColor,
    fgColor,
    marginSize,
    errorCorrectionLevel,
    includeMargin,
    imageSettings,
    style,
    className,
  ])

  if (renderAs === 'canvas') {
    return <QRCodeCanvas {...commonProps} />
  }

  return <QRCodeSVG {...commonProps} />
}

export default QrCode

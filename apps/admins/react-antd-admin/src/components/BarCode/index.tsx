import type { Options } from 'jsbarcode'
import type { CSSProperties, FC } from 'react'
import JsBarcode from 'jsbarcode'
import { useCallback, useEffect, useRef } from 'react'

interface Props {
  tag?: 'svg' | 'canvas' | 'img'
  text: string
  options?: Options
  style?: CSSProperties
  className?: string
}

const BarCode: FC<Props> = ({
  tag = 'svg',
  text,
  options,
  style,
  className,
}) => {
  const containerRef = useRef<never>(null)

  const renderBarcode = useCallback(JsBarcode, [
    text,
    containerRef.current,
    options,
  ])

  useEffect(() => {
    renderBarcode(containerRef.current, text, options)
  }, [renderBarcode, text, options, tag])

  switch (tag) {
    case 'canvas':
      return <canvas ref={containerRef} style={style} className={className} />
    case 'img':
      return (
        <img
          ref={containerRef}
          alt="barcode"
          style={style}
          className={className}
        />
      )
    default:
      return <svg ref={containerRef} style={style} className={className} />
  }
}

export default BarCode

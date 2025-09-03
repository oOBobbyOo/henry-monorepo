import type { Options } from '@better-scroll/core'
import type { ComponentProps, FC } from 'react'
import BScroll from '@better-scroll/core'
import { useMount, useSize, useUpdateEffect } from 'ahooks'
import clsx from 'clsx'
import { memo, useRef } from 'react'

interface Props extends ComponentProps<'div'> {
  /**
   * BetterScroll options
   * @see https://better-scroll.github.io/docs/zh-CN/guide/base-scroll-options.html
   */
  options: Options
  setBsScroll: (bsScroll: BScroll) => void
}

const BetterScroll: FC<Props> = ({
  children,
  className,
  options,
  setBsScroll,
  ...rest
}) => {
  const bsWrapper = useRef<HTMLDivElement>(null)
  const bsContent = useRef<HTMLDivElement>(null)

  const bsWrapperSize = useSize(bsWrapper)
  const bsContentSize = useSize(bsContent)

  const instance = useRef<BScroll | null>(null)

  const isScrollY = Boolean(options.scrollY)

  function initBetterScroll() {
    if (!bsWrapper.current)
      return
    instance.current = new BScroll(bsWrapper.current, options)

    setBsScroll(instance.current)
  }

  useUpdateEffect(() => {
    instance.current?.refresh()
  }, [bsWrapperSize?.width, bsContentSize?.width])

  useMount(() => {
    initBetterScroll()
  })

  return (
    <div
      ref={bsWrapper}
      className={clsx('h-full text-left', className)}
      {...rest}
    >
      <div
        ref={bsContent}
        className={clsx('inline-block', { 'h-full': !isScrollY })}
      >
        {children}
      </div>
    </div>
  )
}

export default memo(BetterScroll)

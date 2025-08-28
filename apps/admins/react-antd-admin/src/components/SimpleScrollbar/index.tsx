import type { FC, ReactNode } from 'react'
import clsx from 'clsx'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const SimpleScrollbar: FC<{
  className?: string
  children: ReactNode
}> = ({
  className,
  children,
}) => {
  return (
    <div className={clsx('h-full flex-1-hidden', className)}>
      <SimpleBar className="h-full">{children}</SimpleBar>
    </div>
  )
}

export default SimpleScrollbar

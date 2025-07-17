import type { FC, PropsWithChildren, ReactNode } from 'react'
import clsx from 'clsx'

type Props = PropsWithChildren<{
  className?: string
  /** Label */
  label: React.ReactNode
  show?: boolean
  suffix?: ReactNode
}>

const SettingItem: FC<Props> = ({
  children,
  className,
  label,
  show = true,
  suffix,
}) => {
  if (!show)
    return null

  return (
    <div className={clsx('w-full flex-y-center justify-between', className)}>
      <div>
        <span className="pr-8px text-base">{label}</span>
        {suffix}
      </div>
      {children}
    </div>
  )
}

export default SettingItem

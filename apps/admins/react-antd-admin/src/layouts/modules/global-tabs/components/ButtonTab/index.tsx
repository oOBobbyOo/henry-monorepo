import type { FC } from 'react'
import type { Props } from '../PageTab'

import clsx from 'clsx'
import styles from '../PageTab/index.module.css'

const ButtonTab: FC<Props> = ({
  active,
  darkMode,
  className,
  prefix,
  suffix,
  style,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'relative inline-flex items-center justify-center gap-4 whitespace-nowrap border border-solid rounded-1 px-3 py-1 cursor-pointer',
        [styles['button-tab']],
        { [styles['button-tab_dark']]: darkMode },
        { [styles['button-tab_active']]: active },
        { [styles['button-tab_active_dark']]: active && darkMode },
        className,
      )}
      style={{ ...style }}
      {...rest}
    >
      {prefix}
      {children}
      {suffix}
    </div>
  )
}

export default ButtonTab

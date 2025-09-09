import type { FC } from 'react'
import type { Props } from '../PageTab'

import clsx from 'clsx'
import styles from '../PageTab/index.module.css'
import ChromeTabBg from './ChromeTabBg'

const ChromeTab: FC<Props> = ({
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
        'relative inline-flex items-center justify-center gap-4 whitespace-nowrap px-24px py-6px -mr-18px cursor-pointer',
        [styles['chrome-tab']],
        { [styles['chrome-tab_dark']]: darkMode },
        { [styles['chrome-tab_active']]: active },
        { [styles['chrome-tab_active_dark']]: active && darkMode },
        className,
      )}
      style={{ ...style }}
      {...rest}
    >
      <div
        className={clsx(
          'pointer-events-none absolute left-0 top-0 -z-1 h-full w-full text-transparent',
          [styles['chrome-tab__bg']],
        )}
      >
        <ChromeTabBg />
      </div>
      {prefix}
      {children}
      {suffix}

      <div
        className={clsx('absolute right-7px h-16px w-1px bg-#1f2225', [
          styles['chrome-tab__divider'],
        ])}
      />
    </div>
  )
}

export default ChromeTab

import type { CSSProperties, FC, MouseEvent, ReactNode } from 'react'
import clsx from 'clsx'
import ButtonTab from '../ButtonTab'
import ChromeTab from '../ChromeTab'
import { createTabCssVars } from './shared'
import SvgClose from './SvgClose'
import './index.module.css'

export interface Props {
  mode?: Theme.ThemeTabMode
  darkMode?: boolean
  className?: string
  commonClass?: string
  chromeClass?: string
  buttonClass?: string
  active?: boolean
  activeColor?: string
  closable?: boolean
  handleClose?: () => void
  onClick: () => void
  prefix?: ReactNode
  suffix?: ReactNode
  children?: ReactNode
  style?: CSSProperties
}

const PageTab: FC<Props> = ({
  mode = 'chrome',
  darkMode,
  active,
  activeColor = '#1890ff',
  className,
  chromeClass,
  buttonClass,
  closable = true,
  handleClose,
  prefix,
  suffix,
  style,
  children,
  ...rest
}) => {
  const cssVars = createTabCssVars(activeColor) as CSSProperties

  const getActiveTabComponent = {
    chrome: {
      class: chromeClass,
      component: ChromeTab,
    },
    button: {
      class: buttonClass,
      component: ButtonTab,
    },
  }

  const ActiveTabComponent = getActiveTabComponent[mode].component
  const activeClass = getActiveTabComponent[mode].class

  function closeTab(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()
    if (handleClose)
      handleClose()
  }

  const suffixComponent
    = suffix
      || (closable && <SvgClose className="svg-close" onClick={closeTab} />)

  return (
    <ActiveTabComponent
      active={active}
      className={clsx(activeClass, className)}
      darkMode={darkMode}
      prefix={prefix}
      suffix={suffixComponent}
      style={{ ...cssVars, ...style }}
      {...rest}
    >
      {children}
    </ActiveTabComponent>
  )
}

export default PageTab

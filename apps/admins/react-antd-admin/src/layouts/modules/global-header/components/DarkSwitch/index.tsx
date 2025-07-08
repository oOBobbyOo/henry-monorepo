import type { ButtonProps, TooltipProps } from 'antd'
import type { FC } from 'react'
import ButtonIcon from '@/components/ButtonIcon'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getDarkMode, toggleDarkMode } from '@/stores/modules/theme/slice'
import { useMemo } from 'react'

interface Props {
  /** Show tooltip */
  showTooltip?: boolean
  /** Tooltip placement */
  tooltipPlacement?: TooltipProps['placement']
}

const icons = {
  light: 'ri:sun-line',
  dark: 'ri:moon-line',
}

const DarkSwitch: FC<Props> = ({ showTooltip = true, tooltipPlacement = 'bottom', ...reset }) => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector(getDarkMode)
  const dispatchDarkMode = () => dispatch(toggleDarkMode())

  const icon = useMemo(() => {
    return darkMode ? icons.dark : icons.light
  }, [darkMode])

  const tooltipContent = showTooltip ? '主题模式' : ''

  const toggleDarkScheme: ButtonProps['onClick'] = (event) => {
    const isAppearanceTransition
      = !!document.startViewTransition
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      dispatchDarkMode()
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )

    const transition = document.startViewTransition(async () => {
      dispatchDarkMode()
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: darkMode ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: darkMode
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }

  return (
    <ButtonIcon
      icon={icon}
      tooltipPlacement={tooltipPlacement}
      tooltipContent={tooltipContent}
      onClick={toggleDarkScheme}
      {...reset}
    />
  )
}

export default DarkSwitch

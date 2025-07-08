import type { TooltipProps } from 'antd'
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

  const icon = useMemo(() => {
    return darkMode ? icons.dark : icons.light
  }, [darkMode])

  const tooltipContent = showTooltip ? '主题模式' : ''

  const toggleDark = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <ButtonIcon
      icon={icon}
      tooltipPlacement={tooltipPlacement}
      tooltipContent={tooltipContent}
      {...reset}
      onClick={toggleDark}
    />
  )
}

export default DarkSwitch

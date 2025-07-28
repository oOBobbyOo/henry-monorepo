import type { TooltipProps } from 'antd'
import type { FC } from 'react'
import ButtonIcon from '@/components/ButtonIcon'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
  /** Show tooltip */
  showTooltip?: boolean
  /** Tooltip placement */
  tooltipPlacement?: TooltipProps['placement']
}

const icons = {
  light: 'ri:sun-line',
  dark: 'ri:moon-line',
}

const DarkSwitch: FC<Props> = ({
  className,
  showTooltip = true,
  tooltipPlacement = 'bottom',
  ...reset
}) => {
  const { t } = useTranslation('header')

  const { darkMode, toggleDark } = useThemeScheme()

  const icon = useMemo(() => {
    return darkMode ? icons.dark : icons.light
  }, [darkMode])

  const tooltipContent = showTooltip ? t('themeSchema') : ''

  return (
    <ButtonIcon
      shape="circle"
      className={className}
      icon={icon}
      tooltipPlacement={tooltipPlacement}
      tooltipContent={tooltipContent}
      onClick={toggleDark}
      {...reset}
    />
  )
}

export default DarkSwitch

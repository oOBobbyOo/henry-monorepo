import type { FC } from 'react'
import ButtonIcon from '@/components/ButtonIcon'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
  /** Show tooltip */
  showTooltip?: boolean
}

const ThemeButton: FC<Props> = ({ className, showTooltip = true }) => {
  const { t } = useTranslation()

  const tooltipContent = showTooltip ? t('header.themeConfig') : ''

  return (
    <ButtonIcon
      className={className}
      shape="circle"
      icon="majesticons:color-swatch-line"
      tooltipContent={tooltipContent}
    />
  )
}

export default ThemeButton

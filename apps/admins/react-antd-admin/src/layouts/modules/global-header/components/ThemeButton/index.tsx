import type { FC } from 'react'
import ButtonIcon from '@/components/ButtonIcon'
import { useAppDispatch } from '@/stores/hook'
import { setThemeDrawerVisible } from '@/stores/modules/app/slice'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
  /** Show tooltip */
  showTooltip?: boolean
}

const ThemeButton: FC<Props> = ({ className, showTooltip = true }) => {
  const { t } = useTranslation('header')

  const tooltipContent = showTooltip ? t('themeConfig') : ''

  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(setThemeDrawerVisible(true))
  }

  return (
    <ButtonIcon
      className={className}
      shape="circle"
      icon="majesticons:color-swatch-line"
      tooltipContent={tooltipContent}
      onClick={handleClick}
    />
  )
}

export default ThemeButton

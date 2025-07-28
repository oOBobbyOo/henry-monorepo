import type { FC } from 'react'
import { useFullscreen } from 'ahooks'
import { useTranslation } from 'react-i18next'
import ButtonIcon from '../ButtonIcon'

interface Props {
  className?: string
  target?: Element | (() => Element)
}

const FullScreen: FC<Props> = ({ className, target = document.body }) => {
  const { t } = useTranslation('header')

  const [isFullscreen, { toggleFullscreen }] = useFullscreen(target)

  return (
    <ButtonIcon
      shape="circle"
      className={className}
      icon={isFullscreen ? 'gridicons:fullscreen-exit' : 'gridicons:fullscreen'}
      tooltipContent={
        isFullscreen ? t('fullscreenExit') : t('fullscreen')
      }
      onClick={toggleFullscreen}
    >
    </ButtonIcon>
  )
}

export default FullScreen

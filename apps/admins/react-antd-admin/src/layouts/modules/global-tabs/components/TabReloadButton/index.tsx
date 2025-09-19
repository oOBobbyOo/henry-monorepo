import ButtonIcon from '@/components/ButtonIcon'
import { useReloadPage } from '@/hooks/useReloadPage'
import { useTranslation } from 'react-i18next'

function TabReloadButton() {
  const { t } = useTranslation()

  const { isReload, reloadPage } = useReloadPage()

  return (
    <ButtonIcon
      shape="circle"
      tooltipContent={t('icon.reload')}
      icon="ant-design:reload-outlined"
      className={isReload ? 'animate-spin animate-duration-750' : ''}
      onClick={reloadPage}
    >
    </ButtonIcon>
  )
}

export default TabReloadButton

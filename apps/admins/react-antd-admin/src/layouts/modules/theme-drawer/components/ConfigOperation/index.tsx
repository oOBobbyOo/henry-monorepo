import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

function ConfigOperation() {
  const { t } = useTranslation()

  return (
    <div className="flex-between">
      <Button danger>{t('theme.configOperation.resetConfig')}</Button>
      <Button type="primary">{t('theme.configOperation.copyConfig')}</Button>
    </div>
  )
}

export default ConfigOperation

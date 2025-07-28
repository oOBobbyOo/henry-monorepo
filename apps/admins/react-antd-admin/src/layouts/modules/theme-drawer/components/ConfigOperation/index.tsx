import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

function ConfigOperation() {
  const { t } = useTranslation('theme')

  return (
    <div className="flex-between">
      <Button danger>{t('configOperation.resetConfig')}</Button>
      <Button type="primary">{t('configOperation.copyConfig')}</Button>
    </div>
  )
}

export default ConfigOperation

import type { FC } from 'react'
import { useRouterPush } from '@/hooks/useRouterPush'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import SvgIcon from '../SvgIcon'

type ExceptionType = '403' | '404' | '500'

interface Props {
  type: ExceptionType
}

const iconMap: Record<ExceptionType, string> = {
  403: 'local:no-permission',
  404: 'local:not-found',
  500: 'local:service-error',
}

const ExceptionBase: FC<Props> = ({ type }) => {
  const { t } = useTranslation('common')

  const { toHome } = useRouterPush()

  return (
    <div className="size-full min-h-520px flex-col-center gap-24px overflow-hidden">
      <div className="flex text-400px text-primary">
        <SvgIcon icon={iconMap[type]} />
      </div>
      <Button type="primary" onClick={toHome}>
        {t('backToHome')}
      </Button>
    </div>
  )
}

export default ExceptionBase

import type { FC } from 'react'
import ButtonIcon from '@/components/ButtonIcon'
import { useLang } from '@/hooks/useLang'
import { Dropdown } from 'antd'
import { useTranslation } from 'react-i18next'

interface Props {
  className?: string
  /** Show tooltip */
  showTooltip?: boolean
}

const LangSwitch: FC<Props> = ({ className, showTooltip = true }) => {
  const { t } = useTranslation()

  const { locale, localeOptions, changeLocale } = useLang()

  const tooltipContent = showTooltip ? t('header.lang') : ''

  function changeLocales({ key }: { key: string }) {
    changeLocale(key as App.I18n.LangType)
  }

  return (
    <Dropdown
      menu={{
        items: localeOptions,
        onClick: changeLocales,
        selectedKeys: [locale],
      }}
    >
      <ButtonIcon
        className={className}
        icon="heroicons:language"
        tooltipContent={tooltipContent}
        tooltipPlacement="left"
      >
      </ButtonIcon>
    </Dropdown>
  )
}

export default LangSwitch

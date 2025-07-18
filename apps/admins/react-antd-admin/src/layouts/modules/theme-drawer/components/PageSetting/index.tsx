import { useThemeScheme } from '@/hooks/useThemeScheme'
import { InputNumber, Switch } from 'antd'
import { useTranslation } from 'react-i18next'
import SettingItem from '../Settingitem'

function PageSetting() {
  const { t } = useTranslation()

  const { themeSettings, changePage, changeHeader, changeFooter }
     = useThemeScheme()

  const isPageAnimate = themeSettings.page.animate

  return (
    <div className="relative flex-col-stretch gap-12px">
      {/* Page */}
      <SettingItem label={t('theme.page.animate')}>
        <Switch
          defaultValue={isPageAnimate}
          onChange={value => changePage({ animate: value })}
        />
      </SettingItem>

      {/* Header */}
      <SettingItem label={t('theme.header.height')}>
        <InputNumber
          className="w-120px"
          defaultValue={themeSettings.header.height}
          onChange={value => changeHeader({ height: value ?? 0 })}
        />
      </SettingItem>

      {/* Footer */}
      <SettingItem label={t('theme.footer.visible')}>
        <Switch
          defaultValue={themeSettings.footer.visible}
          onChange={value => changeFooter({ visible: value })}
        />
      </SettingItem>

      <SettingItem
        label={t('theme.footer.height')}
        show={themeSettings.footer.visible}
      >
        <InputNumber
          className="w-120px"
          defaultValue={themeSettings.footer.height}
          onChange={value => changeFooter({ height: value ?? 0 })}
        />
      </SettingItem>
    </div>
  )
}

export default PageSetting

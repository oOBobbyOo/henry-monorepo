import type { SegmentedOptions } from 'antd/es/segmented'
import SvgIcon from '@/components/SvgIcon'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { Segmented, Switch } from 'antd'
import { useTranslation } from 'react-i18next'
import SettingItem from '../Settingitem'

const themeSchemaRecord: Record<Theme.ThemeScheme, string> = {
  light: 'themeSchema.light',
  dark: 'themeSchema.dark',
  auto: 'themeSchema.auto',
}

const icons: Record<Theme.ThemeScheme, string> = {
  light: 'material-symbols:sunny',
  dark: 'material-symbols:nightlight-rounded',
  auto: 'material-symbols:hdr-auto',
}

const OPTIONS = Object.entries(themeSchemaRecord).map(([key]) => {
  return {
    label: (
      <div className="w-[70px] flex justify-center">
        <SvgIcon className="h-28px" icon={icons[key as Theme.ThemeScheme]} />
      </div>
    ),
    value: key,
  }
}) as SegmentedOptions<Theme.ThemeScheme>

function DarkMode() {
  const { t } = useTranslation('theme')

  const {
    themeSettings,
    themeScheme,
    changeThemeScheme,
    changeGrayscale,
    changeColourWeakness,
  } = useThemeScheme()

  return (
    <div className="flex-col-stretch gap-16px">
      <div className="i-flex-center">
        <Segmented
          options={OPTIONS}
          value={themeScheme}
          onChange={changeThemeScheme}
        />
      </div>

      <SettingItem label={t('grayscale')}>
        <Switch
          defaultChecked={themeSettings.grayscale}
          onChange={changeGrayscale}
        />
      </SettingItem>

      <SettingItem label={t('colourWeakness')}>
        <Switch
          defaultChecked={themeSettings.colourWeakness}
          onChange={changeColourWeakness}
        />
      </SettingItem>
    </div>
  )
}

export default DarkMode

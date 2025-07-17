import type { SegmentedOptions } from 'antd/es/segmented'
import SvgIcon from '@/components/SvgIcon'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { Segmented } from 'antd'

const themeSchemaRecord: Record<Theme.ThemeScheme, string> = {
  light: 'theme.themeSchema.light',
  dark: 'theme.themeSchema.dark',
  auto: 'theme.themeSchema.auto',
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
  const { themeScheme, changeThemeScheme } = useThemeScheme()

  return (
    <div className="flex-center">
      <Segmented
        options={OPTIONS}
        value={themeScheme}
        onChange={changeThemeScheme}
      />
    </div>
  )
}

export default DarkMode

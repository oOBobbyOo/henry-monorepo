import { useThemeScheme } from '@/hooks/useThemeScheme'
import CustomPicker from '../CustomPicker'

function ThemeColor() {
  const { themeSettings, themeColors } = useThemeScheme()

  return (
    <div className="flex-col-stretch gap-12px">
      {Object.entries(themeColors).map(([key, value]) => (
        <CustomPicker
          isInfoFollowPrimary={themeSettings.isInfoFollowPrimary}
          key={key}
          label={key}
          theme={themeSettings.themeColor}
          value={value}
        />
      ))}
    </div>
  )
}

export default ThemeColor

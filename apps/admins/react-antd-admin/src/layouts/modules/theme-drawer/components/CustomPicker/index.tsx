import type { CheckboxProps, ColorPickerProps } from 'antd'
import type { FC } from 'react'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { Checkbox, ColorPicker, Flex, Space, Tooltip } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SettingItem from '../Settingitem'

const swatches: { color: string, name: string }[] = [
  { color: '#3b82f6', name: '海洋蓝' },
  { color: '#6366f1', name: '紫罗兰' },
  { color: '#8b5cf6', name: '梦幻紫' },
  { color: '#a855f7', name: '迷人紫' },
  { color: '#0ea5e9', name: '清澈海洋' },
  { color: '#06b6d4', name: '天空蓝' },
  { color: '#f43f5e', name: '樱桃红' },
  { color: '#ef4444', name: '火焰红' },
  { color: '#ec4899', name: '玫瑰粉' },
  { color: '#d946ef', name: '紫色魅影' },
  { color: '#f97316', name: '橙色阳光' },
  { color: '#f59e0b', name: '金色晨曦' },
  { color: '#eab308', name: '柠檬黄' },
  { color: '#84cc16', name: '草地绿' },
  { color: '#22c55e', name: '清新绿' },
  { color: '#10b981', name: '热带绿' },
]

interface Props {
  isInfoFollowPrimary: boolean
  label: string
  theme: string
  value: string
}

const CustomPicker: FC<Props> = ({
  isInfoFollowPrimary,
  label,
  theme,
  value,
}) => {
  const { t } = useTranslation('theme')

  const { changeIsInfoFollowPrimary, updateThemeColors } = useThemeScheme()

  const onChange: CheckboxProps['onChange'] = (e) => {
    changeIsInfoFollowPrimary(e.target.checked)
  }

  function handleUpdateColor(color: string, name: Theme.ThemeColorKey) {
    updateThemeColors({ color, key: name })
  }

  const [selectTheme, setSelectTheme] = useState<string>(theme)

  const customPanelRender: ColorPickerProps['panelRender'] = (_, { components: { Picker } }) => (
    <Space className="w-250px" direction="vertical">
      <>
        <Picker />
        <Flex wrap gap="small">
          {swatches.map(item => (
            <Tooltip key={item.name} title={item.name}>
              <span
                onClick={() => {
                  handleUpdateColor(
                    item.color,
                    selectTheme as Theme.ThemeColorKey,
                  )
                }}
              >
                <ColorPicker
                  defaultValue={item.color}
                  open={false}
                  size="small"
                />
              </span>
            </Tooltip>
          ))}
        </Flex>
      </>
    </Space>
  )

  return (
    <SettingItem
      label={t(`themeColor.${label}`)}
      suffix={
        label === 'info' && (
          <Checkbox
            defaultChecked={isInfoFollowPrimary}
            onChange={onChange}
          >
            {t('themeColor.followPrimary')}
          </Checkbox>
        )
      }
    >
      <ColorPicker
        disabled={label === 'info' && isInfoFollowPrimary}
        panelRender={customPanelRender}
        value={value}
        onChange={(_, hex) => handleUpdateColor(hex, label as Theme.ThemeColorKey)}
        onOpenChange={() => {
          setSelectTheme(label)
        }}
      />
    </SettingItem>
  )
}

export default CustomPicker

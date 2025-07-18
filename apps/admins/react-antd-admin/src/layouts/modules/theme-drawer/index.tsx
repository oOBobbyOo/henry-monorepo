import ButtonIcon from '@/components/ButtonIcon'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getThemeDrawerVisible, setThemeDrawerVisible } from '@/stores/modules/app/slice'
import { Divider, Drawer } from 'antd'
import { useTranslation } from 'react-i18next'
import ConfigOperation from './components/ConfigOperation'
import DarkMode from './components/DarkMode'
import PageSetting from './components/PageSetting'
import ThemeColor from './components/ThemeColor'

function ThemeDrawer() {
  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const themeDrawerVisible = useAppSelector(getThemeDrawerVisible)

  function handleClose() {
    dispatch(setThemeDrawerVisible(false))
  }

  return (
    <Drawer
      title={t('theme.themeDrawerTitle')}
      closeIcon={false}
      open={themeDrawerVisible}
      extra={(
        <ButtonIcon
          className="h-28px"
          icon="ant-design:close-outlined"
          onClick={handleClose}
        />
      )}
      footer={<ConfigOperation />}
      onClose={handleClose}
      styles={{ body: { padding: 0 } }}
    >
      <div className="overflow-x-hidden px-24px pb-24px pt-8px">
        <Divider>{t('theme.themeSchema.title')}</Divider>
        <DarkMode />
        <Divider>{t('theme.themeColor.title')}</Divider>
        <ThemeColor />
        <Divider>{t('theme.page.title')}</Divider>
        <PageSetting />
      </div>
    </Drawer>
  )
}

export default ThemeDrawer

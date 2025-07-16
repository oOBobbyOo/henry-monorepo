import ButtonIcon from '@/components/ButtonIcon'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getThemeDrawerVisible, setThemeDrawerVisible } from '@/stores/modules/app/slice'
import { Drawer } from 'antd'
import { useTranslation } from 'react-i18next'

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
      onClose={handleClose}
    >
      <p>Some contents...</p>
    </Drawer>
  )
}

export default ThemeDrawer

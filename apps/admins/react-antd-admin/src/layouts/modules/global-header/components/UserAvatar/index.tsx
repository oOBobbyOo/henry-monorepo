import type { MenuProps } from 'antd'
import ButtonIcon from '@/components/ButtonIcon'
import SvgIcon from '@/components/SvgIcon'
import { useAppSelector } from '@/stores/hook'
import { getUserInfo } from '@/stores/modules/user/slice'
import { Avatar, Dropdown } from 'antd'
import { useTranslation } from 'react-i18next'

function UserAvatar() {
  const { t } = useTranslation('common')

  const userInfo = useAppSelector(getUserInfo)

  const items: MenuProps['items'] = [
    {
      key: 'userCenter',
      label: (
        <div className="flex-center gap-8px">
          <SvgIcon className="text-18px" icon="ph:user-circle" />
          {t('userCenter')}
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: (
        <div className="flex-center gap-8px">
          <SvgIcon className="text-18px" icon="ph:sign-out" />
          {t('logout')}
        </div>
      ),
    },
  ]

  const onClick = ({ key }: { key: string }) => {
    console.log(key)
  }

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
    >
      <ButtonIcon className="px-8px">
        {userInfo?.avatar
          ? <Avatar size="small" src={userInfo.avatar} />
          : <SvgIcon className="text-2xl" icon="ph:user-circle" />}
        <span className="text-16px font-medium">{userInfo.userName}</span>
      </ButtonIcon>
    </Dropdown>
  )
}

export default UserAvatar

import type { MenuProps } from 'antd'
import type { FC, ReactNode } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { Dropdown } from 'antd'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  active: boolean
  disabledKeys?: App.Global.DropdownKey[]
  excludeKeys?: App.Global.DropdownKey[]
  children: ReactNode
}

interface DropdownOption {
  disabled?: boolean
  icon: string
  key: App.Global.DropdownKey
  label: string
}

const TabContextMenu: FC<Props> = ({ disabledKeys = [], excludeKeys = [], children }) => {
  const { t } = useTranslation('tab')

  const options = useMemo(() => {
    const opts: DropdownOption[] = [
      {
        icon: 'ant-design:close-outlined',
        key: 'closeCurrent',
        label: t('dropdown.closeCurrent'),
      },
      {
        icon: 'ant-design:column-width-outlined',
        key: 'closeOther',
        label: t('dropdown.closeOther'),
      },
      {
        icon: 'mdi:format-horizontal-align-left',
        key: 'closeLeft',
        label: t('dropdown.closeLeft'),
      },
      {
        icon: 'mdi:format-horizontal-align-right',
        key: 'closeRight',
        label: t('dropdown.closeRight'),
      },
      {
        icon: 'ant-design:line-outlined',
        key: 'closeAll',
        label: t('dropdown.closeAll'),
      },
    ]

    return opts
      .filter(opt => !excludeKeys.includes(opt.key))
      .map((opt) => {
        if (disabledKeys.includes(opt.key)) {
          opt.disabled = true
        }
        return opt
      })
  }, [excludeKeys, disabledKeys])

  const menus = useMemo(() => {
    const items: MenuProps['items'] = options.map(opt => ({
      disabled: opt.disabled,
      icon: <SvgIcon className="text-icon" icon={opt.icon} />,
      key: opt.key,
      label: opt.label,
    }))

    return items
  }, [options])

  const handleClick: MenuProps['onClick'] = (e) => {
    console.log('[ e ] >>:', e)
  }

  return (
    <Dropdown
      menu={{ items: menus, onClick: handleClick }}
      trigger={['contextMenu']}
    >
      {children}
    </Dropdown>
  )
}

export default TabContextMenu

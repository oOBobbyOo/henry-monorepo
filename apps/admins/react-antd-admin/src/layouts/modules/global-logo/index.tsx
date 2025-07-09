import type { FC } from 'react'
import { useAppSelector } from '@/stores/hook'
import { getThemeSettings } from '@/stores/modules/theme/slice'
import './index.css'

interface Props {
  collapsed: boolean
}

const GlobalLogo: FC<Props> = ({ collapsed }) => {
  const settings = useAppSelector(getThemeSettings)

  return (
    <div className="logo-wrapper flex-center" style={{ height: `${settings.header.height}px` }}>
      <h1 className="logo">{collapsed ? 'HA' : 'Henry Admin'}</h1>
    </div>
  )
}

export default GlobalLogo

import type { FC } from 'react'
import ButtonIcon from '@/components/ButtonIcon'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getSiderCollapse, toggleSiderCollapse } from '@/stores/modules/app/slice'
import { useMemo } from 'react'

interface Props {
  arrowIcon?: boolean
}

type NumberBool = 0 | 1

const icons: Record<NumberBool, Record<NumberBool, string>> = {
  0: {
    0: 'line-md:menu-fold-left',
    1: 'line-md:menu-fold-right',
  },
  1: {
    0: 'ph-caret-double-left-bold',
    1: 'ph-caret-double-right-bold',
  },
}

const SiderToggler: FC<Props> = ({ arrowIcon }) => {
  const dispatch = useAppDispatch()
  const siderCollapse = useAppSelector(getSiderCollapse)

  const isArrowIcon = Number(arrowIcon || false) as NumberBool
  const isCollapsed = Number(siderCollapse || false) as NumberBool

  const icon = useMemo(() => {
    return icons[isArrowIcon][isCollapsed]
  }, [isArrowIcon, isCollapsed])

  return (
    <ButtonIcon
      icon={icon}
      content={siderCollapse ? '展开侧边栏' : '收起侧边栏'}
      onClick={() => dispatch(toggleSiderCollapse())}
    >
    </ButtonIcon>
  )
}

export default SiderToggler

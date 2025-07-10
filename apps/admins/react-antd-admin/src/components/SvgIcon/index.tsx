import type { CSSProperties } from 'react'
import { Icon } from '@iconify/react'

interface Props {
  readonly className?: string
  /** Iconify icon name */
  readonly icon?: string
  /** Icon style */
  readonly style?: CSSProperties
}

/** local svg */
const localPrefix = 'local:'

function SvgIcon({ icon, ...rest }: Props) {
  const isLocalIcon = () => icon?.startsWith(localPrefix)

  const symbolId = () => {
    const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env
    const defaultLocalIcon = 'no-icon'
    const iconName = icon?.replace(localPrefix, '') || defaultLocalIcon
    return `#${prefix}-${iconName}`
  }

  return isLocalIcon() || !icon
    ? (
        <svg aria-hidden="true" width="1em" height="1em" {...rest}>
          <use href={symbolId()} fill="currentColor" />
        </svg>
      )
    : (
        <Icon icon={icon} {...rest} />
      )
}

export default SvgIcon

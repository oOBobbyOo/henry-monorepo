import type { FC, ReactNode } from 'react'

interface Props {
  mode?: Theme.ThemeTabMode
  prefix: ReactNode
  children?: ReactNode
}

const PageTab: FC<Props> = ({ prefix, children }) => {
  return (
    <div>
      {prefix}
      {children}
    </div>
  )
}

export default PageTab

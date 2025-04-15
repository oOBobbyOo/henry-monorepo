import type { FC, LazyExoticComponent, ReactNode } from 'react'
import { Suspense } from 'react'

const LazyLoadComponent: FC<{
  Component: LazyExoticComponent<() => ReactNode>
}> = ({ Component }) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component />
    </Suspense>
  )
}

export default LazyLoadComponent

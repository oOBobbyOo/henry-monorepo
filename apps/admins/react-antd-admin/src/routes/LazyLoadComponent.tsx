import type { FC, LazyExoticComponent, ReactNode } from 'react'
import Loading from '@/components/Loading'
import { Suspense } from 'react'

const LazyLoadComponent: FC<{
  Component: LazyExoticComponent<() => ReactNode>
}> = ({ Component }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}

export default LazyLoadComponent

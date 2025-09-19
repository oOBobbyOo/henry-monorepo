import type { FC, ReactNode } from 'react'
import { LazyMotion } from 'motion/react'

function loadFeatures() {
  return import('./features').then(res => res.default)
}

const LazyAnimate: FC<{
  children: ReactNode
}> = ({ children }) => {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}

export default LazyAnimate

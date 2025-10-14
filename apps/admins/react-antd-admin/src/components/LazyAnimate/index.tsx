import type { FC, ReactNode } from 'react'
import { LazyMotion } from 'motion/react'

async function loadFeatures() {
  const res = await import('./features')
  return res.default
}

const LazyAnimate: FC<{
  children: ReactNode
}> = ({ children }) => {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}

export default LazyAnimate

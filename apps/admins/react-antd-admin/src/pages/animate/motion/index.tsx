import LazyAnimate from '@/components/LazyAnimate'
import { m } from 'motion/react'

function MotionAnimate() {
  return (
    <div className="m-10">
      <LazyAnimate>
        <m.div
          className="w-25 h-25 bg-red-500 rd-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
      </LazyAnimate>
    </div>
  )
}

export default MotionAnimate

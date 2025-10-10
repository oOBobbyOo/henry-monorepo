import LazyAnimate from '@/components/LazyAnimate'
import { animate, m, motion, useMotionValue, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'

function MotionAnimate() {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 })
    return () => controls.stop()
  }, [])

  return (
    <div className="motion m-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-20 gap-y-10 justify-center content-center">
        <LazyAnimate>
          <m.div
            className="w-25 h-25 bg-red-500 rd-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />
        </LazyAnimate>

        <LazyAnimate>
          <m.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="w-25 h-25 bg-#dd00ee rd-2"
          />
        </LazyAnimate>

        <LazyAnimate>
          <m.div
            className="w-25 h-25 bg-#0cdcf7 rd-2"
            whileHover={{
              scale: [null, 1.1, 1.6],
              transition: {
                duration: 0.5,
                times: [0, 0.6, 1],
                ease: ['easeInOut', 'easeOut'],
              },
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          />
        </LazyAnimate>

        <LazyAnimate>
          <m.pre
            style={{
              fontSize: 64,
              color: '#8df0cc',
            }}
          >
            {rounded}
          </m.pre>
        </LazyAnimate>

        <LazyAnimate>
          <button
            className="toggle-container w-[100px] h-[50px] bg-[#9911ff44] rd-[50px] cursor-pointer flex p-[5px]"
            style={{
              justifyContent: `flex-${isOn ? 'start' : 'end'}`,
            }}
            onClick={toggleSwitch}
          >
            <motion.div
              className="toggle-handle w-[40px] h-[40px] bg-#9911ff rd-50%"
              layout
              transition={{
                type: 'spring',
                visualDuration: 0.2,
                bounce: 0.2,
              }}
            />
          </button>
        </LazyAnimate>
      </div>
    </div>
  )
}

export default MotionAnimate

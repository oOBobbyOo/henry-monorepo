import LoadingScreen from '@/components/LoadingScreen'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopLayout from './desktop-layout'
import MobileLayout from './mobile-layout'

function Layout() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [loaded, setLoaded] = useState(false)

  // 动态加载组件
  useEffect(() => {
    const loadComponent = async () => {
      if (isMobile) {
        await import('./mobile-layout')
      }
      else {
        await import('./desktop-layout')
      }
      setLoaded(true)
    }

    loadComponent()
  }, [isMobile])

  return (
    <>
      {loaded
        ? (
            isMobile
              ? (
                  <MobileLayout />
                )
              : (
                  <DesktopLayout />
                )
          )
        : (
            <LoadingScreen />
          )}
    </>
  )
}

export default Layout

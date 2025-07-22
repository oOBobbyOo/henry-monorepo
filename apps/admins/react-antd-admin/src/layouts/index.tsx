import LoadingScreen from '@/components/LoadingScreen'
import { useResponsive } from '@/hooks/useResponsive'
import { useEffect, useState } from 'react'

function Layout() {
  const { isMobile } = useResponsive()
  const [Component, setComponent] = useState<React.ComponentType | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  // 动态加载组件
  useEffect(() => {
    const loadLayout = async () => {
      try {
        const module = await import(
          /* webpackChunkName: "[layout]" */
          `./${isMobile ? 'mobile-layout' : 'desktop-layout'}`
        )

        setComponent(() => module.default)
        setLoaded(true)
        setError(false)
      }
      catch (err) {
        console.error('Layout load failed:', err)
        setError(true)
      }
    }

    loadLayout()
  }, [isMobile])

  if (error)
    return <div>Failed to load the layout component. Please refresh the page.</div>

  if (!loaded)
    return <LoadingScreen />

  return Component ? <Component /> : <div>No layout loaded.</div>
}

export default Layout

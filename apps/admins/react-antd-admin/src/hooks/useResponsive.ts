import { useMediaQuery } from 'react-responsive'

export function useResponsive() {
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 })
  // const isDesktop = useMediaQuery({ minWidth: 1025 })

  // 定义断点
  const BREAKPOINTS = {
    mobile: '(max-width: 768px)',
    tablet: '(min-width: 769px) and (max-width: 1024px)',
    desktop: '(min-width: 1025px)',
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
  }

  const isMobile = useMediaQuery({ query: BREAKPOINTS.mobile })
  const isTablet = useMediaQuery({ query: BREAKPOINTS.tablet })
  const isDesktop = useMediaQuery({ query: BREAKPOINTS.desktop })

  // 设备方向
  const isPortrait = useMediaQuery({ query: BREAKPOINTS.portrait })
  const isLandscape = useMediaQuery({ query: BREAKPOINTS.landscape })

  return {
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
    isLandscape,
  }
}

import { useThemeScheme } from '@/hooks/useThemeScheme'
import { Layout } from 'antd'

const { Footer } = Layout

function GlobalFooter() {
  const { themeSettings } = useThemeScheme()

  return (
    <Footer
      className="global-layout-footer flex-center z-99"
      style={{ height: `${themeSettings.footer.height}px` }}
    >
      Copyright © 2025 by @henry
    </Footer>
  )
}

export default GlobalFooter

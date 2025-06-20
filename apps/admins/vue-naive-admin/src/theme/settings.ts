export const themeSettings: Theme.ThemeSetting = {
  themeScheme: 'light',
  grayscale: false,
  colourWeakness: false,
  themeColor: '#646cff',
  otherColor: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  },
  isInfoFollowPrimary: true,
  layout: {
    mode: 'basic',
  },
  page: {
    animate: true,
    animateMode: 'fade-slide',
  },
  header: {
    height: 56,
  },
  tab: {
    visible: true,
    cache: true,
    height: 44,
    mode: 'chrome',
  },
  sider: {
    width: 240,
    collapsedWidth: 64,
  },
  footer: {
    visible: true,
    height: 48,
  },
}

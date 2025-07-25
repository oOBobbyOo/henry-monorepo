const theme = {
  themeDrawerTitle: '主题配置',
  themeSchema: {
    title: '主题模式',
    light: '亮色模式',
    dark: '暗黑模式',
    auto: '跟随系统',
  },
  grayscale: '灰色模式',
  colourWeakness: '色弱模式',
  themeColor: {
    title: '主题颜色',
    primary: '主色',
    info: '信息色',
    success: '成功色',
    warning: '警告色',
    error: '错误色',
    followPrimary: '跟随主色',
  },
  page: {
    title: '页面设置',
    animate: '页面切换动画',
    animateMode: '页面切换动画模式',
    animateName: {
      'fade': '淡入淡出',
      'fade-slide': '滑动',
      'fade-bottom': '底部消退',
      'fade-scale': '缩放消退',
      'zoom-fade': '渐变',
      'zoom-out': '闪现',
      'none': '无',
    },
  },
  header: {
    height: '头部高度',
  },
  tab: {
    visible: '显示标签栏',
    cache: '标签栏信息缓存',
    height: '标签栏高度',
    mode: {
      title: '标签栏风格',
      chrome: '谷歌风格',
      button: '按钮风格',
    },
  },
  sider: {
    width: '侧边栏宽度',
    collapsedWidth: '侧边栏折叠宽度',
  },
  footer: {
    visible: '显示底部',
    height: '底部高度',
  },
  configOperation: {
    copyConfig: '复制配置',
    copySuccessMsg: '复制成功，请替换 src/theme/settings.ts 中的变量 themeSettings',
    resetConfig: '重置配置',
    resetSuccessMsg: '重置成功',
  },
}

export default theme

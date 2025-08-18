import type { ECharts, EChartsOption, SetOptionOpts } from './echarts'

export type ThemeType = 'dark' | 'light'
export type RendererType = 'canvas' | 'svg'

export interface UseEchartsOptions {
  theme?: ThemeType
  renderer?: RendererType
  initOptions?: {
    devicePixelRatio?: number
    width?: number
    height?: number
    locale?: string
  }
  setOptionOpts?: SetOptionOpts
  autoResize?: boolean
  loadingOptions?: {
    text?: string
    color?: string
    textColor?: string
    maskColor?: string
    zlevel?: number
  }
  onChartReady?: (chart: ECharts) => void
  onEvents?: Record<string, (...args: any[]) => void>
  debounceDelay?: number
  enableVisibilityOptimization?: boolean // 可见性优化
  enableSizeTracking?: boolean // 尺寸跟踪
}

export interface UseEchartsReturn {
  chartRef: React.RefObject<HTMLDivElement>
  chartInstance: ECharts | null
  updateOptions: (newOptions: EChartsOption, opts?: SetOptionOpts) => void
  mergeOptions: (newOptions: EChartsOption, opts?: SetOptionOpts) => void
  getDataURL: (opts?: {
    type?: 'png' | 'jpeg' | 'svg'
    pixelRatio?: number
    backgroundColor?: string
  }) => string
  setLoading: (loading: boolean) => void
  setTheme: (theme: 'dark' | 'light') => void
  setRenderer: (renderer: 'canvas' | 'svg') => void
  addEvent: (eventName: string, handler: (...args: any[]) => void) => void
  removeEvent: (eventName: string, handler?: (...args: any[]) => void) => void
  dispose: () => void
  resize: () => void
  isLoading: Ref<boolean>
  error: Ref<string | null>
  isVisible: Ref<boolean>
  elementSize: Ref<{ width: number, height: number }>
  isReady: Ref<boolean>
}

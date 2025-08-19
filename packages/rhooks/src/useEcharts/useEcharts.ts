import type { ECharts, EChartsOption } from './echarts'
import type { UseEchartsOptions } from './type'
import { useCallback, useEffect, useRef, useState } from 'react'
import { echarts } from './echarts'

export function useEcharts(
  initialOptions?: EChartsOption,
  config?: UseEchartsOptions,
) {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstanceRef = useRef<ECharts | null>(null)
  const [chartInstance, setChartInstance] = useState<ECharts | null>(null)
  const [currentTheme, setCurrentTheme] = useState(config?.theme || 'light')
  const [currentRenderer, setCurrentRenderer] = useState(config?.renderer || 'canvas')
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const {
    initOptions,
    setOptionOpts = { notMerge: false, replaceMerge: undefined },
    autoResize = true,
    loadingOptions,
    onChartReady,
    onEvents,
    debounceDelay = 100,
  } = config || {}

  // 初始化图表
  const initChart = useCallback(() => {
    if (!chartRef.current)
      return

    // 如果已存在实例，先销毁
    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose()
    }

    // 创建新实例
    const chart = echarts.init(
      chartRef.current,
      currentTheme,
      {
        renderer: currentRenderer,
        ...initOptions,
      },
    )
    chartInstanceRef.current = chart
    setChartInstance(chart)

    // 绑定事件
    if (onEvents) {
      Object.entries(onEvents).forEach(([eventName, handler]) => {
        chart.on(eventName, handler)
      })
    }

    // 设置初始配置
    if (initialOptions) {
      chart.setOption({
        backgroundColor: 'transparent',
        ...initialOptions,
      }, setOptionOpts)
    }

    // 图表准备就绪回调
    onChartReady?.(chart)

    return chart
  }, [currentTheme, currentRenderer, initOptions, initialOptions, setOptionOpts, onEvents, onChartReady])

  // 更新配置 (不合并)
  const updateOptions = useCallback((newOptions: EChartsOption, opts = setOptionOpts) => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.setOption(newOptions, { ...opts, notMerge: true })
    }
  }, [setOptionOpts])

  // 合并配置
  const mergeOptions = useCallback((newOptions: EChartsOption, opts = setOptionOpts) => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.setOption(newOptions, { ...opts, notMerge: false })
    }
  }, [setOptionOpts])

  // 获取图表的 DataURL
  const getDataURL = useCallback((opts?: {
    type?: 'png' | 'jpeg' | 'svg'
    pixelRatio?: number
    backgroundColor?: string
  }) => {
    if (!chartInstanceRef.current)
      return ''
    return chartInstanceRef.current.getDataURL(opts)
  }, [])

  // 设置加载状态
  const setLoading = useCallback((loading: boolean) => {
    if (!chartInstanceRef.current)
      return

    if (loading) {
      chartInstanceRef.current.showLoading(loadingOptions)
    }
    else {
      chartInstanceRef.current.hideLoading()
    }
  }, [loadingOptions])

  // 设置主题
  const setTheme = useCallback((theme: 'dark' | 'light') => {
    setCurrentTheme(theme)
  }, [])

  // 设置渲染器
  const setRenderer = useCallback((renderer: 'canvas' | 'svg') => {
    setCurrentRenderer(renderer)
  }, [])

  // 添加事件监听
  const addEvent = useCallback((eventName: string, handler: (...args: any[]) => void) => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.on(eventName, handler)
    }
  }, [])

  // 移除事件监听
  const removeEvent = useCallback((eventName: string, handler?: (...args: any[]) => void) => {
    if (chartInstanceRef.current) {
      if (handler) {
        chartInstanceRef.current.off(eventName, handler)
      }
      else {
        chartInstanceRef.current.off(eventName)
      }
    }
  }, [])

  // 销毁图表
  const dispose = useCallback(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.dispose()
      chartInstanceRef.current = null
      setChartInstance(null)
    }
  }, [])

  // 手动触发 resize
  const resize = useCallback(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.resize()
    }
  }, [])

  // 防抖处理的 resize
  const debouncedResize = useCallback(() => {
    // 清除之前的定时器
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current)
    }

    // 设置新的定时器
    resizeTimeoutRef.current = setTimeout(() => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.resize()
      }
    }, debounceDelay)
  }, [debounceDelay])

  // 自动 resize 处理
  useEffect(() => {
    if (!autoResize)
      return
    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      // 清理定时器
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [autoResize, resize])

  // 主题或渲染器变化时重新初始化
  useEffect(() => {
    initChart()

    return () => {
      dispose()
    }
  }, [currentTheme, currentRenderer])

  // 配置变化时更新图表
  useEffect(() => {
    if (initialOptions && chartInstanceRef.current) {
      chartInstanceRef.current.setOption(initialOptions, setOptionOpts)
    }
  }, [initialOptions, setOptionOpts])

  return {
    chartRef,
    chartInstance,
    updateOptions,
    mergeOptions,
    getDataURL,
    setLoading,
    setTheme,
    setRenderer,
    addEvent,
    removeEvent,
    dispose,
    resize,
  }
}

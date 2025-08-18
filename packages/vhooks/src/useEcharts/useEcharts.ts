import type { ECharts, EChartsOption } from './echarts'
import type { RendererType, ThemeType, UseEchartsOptions } from './type'
import { tryOnMounted, tryOnUnmounted, useDebounceFn, useElementSize, useElementVisibility, useResizeObserver } from '@vueuse/core'
import { computed, nextTick, ref, shallowRef, watch } from 'vue'
import { echarts } from './echarts'

export function useEcharts(
  initialOptions?: EChartsOption,
  config: UseEchartsOptions = {},
) {
  const chartRef = ref<HTMLDivElement | null>(null)
  const chartInstance = shallowRef<ECharts | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const isReady = ref(false)

  const {
    theme = 'light',
    renderer = 'canvas',
    initOptions,
    setOptionOpts = { notMerge: false },
    autoResize = true,
    debounceDelay = 100,
    loadingOptions,
    onChartReady,
    onEvents,
    enableVisibilityOptimization = true,
    enableSizeTracking = true,
  } = config
  const currentTheme = ref<ThemeType>(theme)
  const currentRenderer = ref<RendererType>(renderer)

  const isVisible = enableVisibilityOptimization
    ? useElementVisibility(chartRef)
    : ref(true)

  const { width, height } = enableSizeTracking
    ? useElementSize(chartRef)
    : { width: ref(0), height: ref(0) }

  const elementSize = computed(() => ({
    width: width.value,
    height: height.value,
  }))

  // 初始化图表
  const initChart = async (): Promise<ECharts | null> => {
    if (!chartRef.value)
      return null

    try {
      error.value = null
      isLoading.value = true
      isReady.value = false

      if (chartInstance.value) {
        chartInstance.value.dispose()
        chartInstance.value = null
      }

      await nextTick()

      const chart = echarts.init(
        chartRef.value,
        currentTheme.value,
        {
          renderer: currentRenderer.value,
          ...initOptions,
        },
      )

      chartInstance.value = chart

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

      isReady.value = true
      // 图表准备就绪回调
      onChartReady?.(chart)

      return chart
    }
    catch (err) {
      error.value = err instanceof Error ? err.message : '图表初始化失败'
      return null
    }
    finally {
      isLoading.value = false
    }
  }

  // 更新配置
  const updateOptions = (newOptions: EChartsOption, opts = setOptionOpts) => {
    try {
      if (chartInstance.value && isReady.value) {
        chartInstance.value.setOption(newOptions, { ...opts, notMerge: true })
        error.value = null
      }
    }
    catch (err) {
      error.value = err instanceof Error ? err.message : '更新配置失败'
    }
  }

  // 合并配置
  const mergeOptions = (newOptions: EChartsOption, opts = setOptionOpts) => {
    try {
      if (chartInstance.value && isReady.value) {
        chartInstance.value.setOption(newOptions, { ...opts, notMerge: false })
        error.value = null
      }
    }
    catch (err) {
      error.value = err instanceof Error ? err.message : '合并配置失败'
    }
  }

  // 获取图表的 DataURL
  const getDataURL = (opts?: {
    type?: 'png' | 'jpeg' | 'svg'
    pixelRatio?: number
    backgroundColor?: string
  }): string => {
    if (!chartInstance.value || !isReady.value)
      return ''
    return chartInstance.value.getDataURL(opts)
  }

  // 设置加载状态
  const setLoading = (loading: boolean) => {
    if (!chartInstance.value)
      return

    isLoading.value = loading

    if (loading) {
      chartInstance.value.showLoading(loadingOptions)
    }
    else {
      chartInstance.value.hideLoading()
    }
  }

  // 设置主题
  const setTheme = (newTheme: ThemeType) => {
    currentTheme.value = newTheme
  }

  // 设置渲染器
  const setRenderer = (newRenderer: RendererType) => {
    currentRenderer.value = newRenderer
  }

  // 添加事件监听
  const addEvent = (eventName: string, handler: (...args: any[]) => void) => {
    if (chartInstance.value) {
      chartInstance.value.on(eventName, handler)
    }
  }

  // 移除事件监听
  const removeEvent = (eventName: string, handler?: (...args: any[]) => void) => {
    if (chartInstance.value) {
      if (handler) {
        chartInstance.value.off(eventName, handler)
      }
      else {
        chartInstance.value.off(eventName)
      }
    }
  }

  // 立即执行的 resize
  const resize = () => {
    if (chartInstance.value && isReady.value) {
      chartInstance.value.resize()
    }
  }

  // 使用 useDebounceFn 创建防抖版本的 resize
  const debouncedResize = useDebounceFn(resize, debounceDelay)

  // 销毁图表
  const dispose = () => {
    if (chartInstance.value) {
      chartInstance.value.dispose()
      chartInstance.value = null
    }

    error.value = null
    isLoading.value = false
    isReady.value = false
  }

  // 使用 useResizeObserver 替代 window resize 事件
  if (autoResize) {
    useResizeObserver(chartRef, (entries) => {
      const entry = entries[0]
      if (entry && chartInstance.value) {
        // 使用 useDebounceFn 创建的防抖函数
        debouncedResize()
      }
    })
  }

  // 监听元素可见性变化，优化性能
  watch(isVisible, (visible) => {
    if (visible && chartInstance.value && isReady.value) {
      // 元素变为可见时，触发一次 resize 确保图表正确显示
      nextTick(() => {
        resize()
      })
    }
  })

  // 监听主题和渲染器变化，重新初始化图表
  watch([currentTheme, currentRenderer], async () => {
    await initChart()
  })

  // 使用 tryOnMounted 确保安全的挂载处理
  tryOnMounted(async () => {
    await initChart()
  })

  // 使用 tryOnUnmounted 确保安全的清理
  tryOnUnmounted(() => {
    dispose()
  })

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
    resize,
    dispose,
    isLoading,
    error,
    isVisible,
    elementSize,
    isReady,
  }
}

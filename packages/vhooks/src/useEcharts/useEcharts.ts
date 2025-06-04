import type { ECOption } from './echarts'
import { tryOnUnmounted, useResizeObserver } from '@vueuse/core'
import { nextTick, onMounted, ref, shallowRef, watch } from 'vue'
import { echarts } from './echarts'

export type EChartTheme = 'light' | 'dark'
export type EChartRenderer = 'canvas' | 'svg'

export function useEcharts(
  initialOptions: ECOption = {},
  initialTheme: EChartTheme = 'light',
  initialRenderer: EChartRenderer = 'canvas',
) {
  const chartInstance = shallowRef<echarts.ECharts | null>(null)
  const chartRef = ref<HTMLElement | null>(null)
  const isLoading = ref(true) // 加载状态
  const error = ref<Error | null>(null) // 错误对象

  const chartOptions = shallowRef<ECOption>({
    ...initialOptions,
    backgroundColor: 'transparent',
  })

  const theme = ref<EChartTheme>(initialTheme)
  const renderer = ref<EChartRenderer>(initialRenderer)

  // Manual dispose
  const disposeChart = () => {
    chartInstance.value?.dispose()
    chartInstance.value = null
  }

  // Initialize chart
  const initChart = async () => {
    await nextTick()

    if (!chartRef.value)
      return

    // Dispose existing instance if exists
    if (chartInstance.value) {
      disposeChart()
    }

    isLoading.value = true
    error.value = null

    try {
      // Create new instance
      chartInstance.value = echarts.init(
        chartRef.value,
        theme.value,
        { renderer: renderer.value },
      )
      chartInstance.value.setOption(chartOptions.value)
    }
    catch (error: any) {
      error.value = error
    }
    finally {
      isLoading.value = false
    }
  }

  // Set complete options (replace existing)
  const setOptions = (options: ECOption) => {
    chartOptions.value = {
      ...chartOptions.value,
      ...options,
    }

    nextTick(() => {
      if (chartInstance.value) {
        chartInstance.value.setOption(chartOptions.value, true)
      }
    })
  }

  // Merge partial options with existing config
  const updateOptions = (newOptions: ECOption, notMerge: boolean = false) => {
    chartOptions.value = {
      ...chartOptions.value,
      ...newOptions,
    }

    nextTick(() => {
      if (chartInstance.value) {
        chartInstance.value.setOption(chartOptions.value, notMerge)
      }
    })
  }

  const showLoading = (type?: string, opts?: object) => {
    isLoading.value = true
    chartInstance.value?.showLoading(type, opts)
  }

  const hideLoading = () => {
    isLoading.value = false
    chartInstance.value?.hideLoading()
  }

  const resize = () => {
    chartInstance.value?.resize()
  }

  // Handle responsive resizing
  const { stop: stopResizeObserver } = useResizeObserver(chartRef, () => {
    chartInstance.value?.resize()
  })

  // Initialize on mounted
  onMounted(() => {
    initChart()
  })

  // Change theme
  const setTheme = (newTheme: EChartTheme) => {
    theme.value = newTheme
  }

  // Change renderer
  const setRenderer = (newRenderer: EChartRenderer) => {
    renderer.value = newRenderer
  }

  // Watch for theme changes
  const stopThemeWatch = watch(theme, () => {
    initChart()
  })

  // Watch for renderer changes
  const stopRendererWatch = watch(renderer, () => {
    initChart()
  })

  // Full cleanup
  const dispose = () => {
    stopResizeObserver()
    stopThemeWatch()
    stopRendererWatch()
    disposeChart()
  }

  // Auto cleanup on unmount
  tryOnUnmounted(dispose)

  return {
    chartRef,
    chartInstance,
    setOptions,
    updateOptions,
    isLoading,
    error,
    showLoading,
    hideLoading,
    setTheme,
    setRenderer,
    resize,
  }
}

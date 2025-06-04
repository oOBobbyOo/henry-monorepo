import type { Ref } from 'vue'
import type { ISpec, IVChart } from './vchart'
import { tryOnUnmounted } from '@vueuse/core'
import { nextTick, onMounted, ref, shallowRef, toValue, unref } from 'vue'
import { VChart } from './vchart'

// 定义主题类型
export type VChartTheme = 'light' | 'dark'

interface UseVChartOptions {
  spec: Ref<ISpec> | ISpec // 图表配置，使用 Ref 以支持响应式更新
  theme?: Ref<VChartTheme> | VChartTheme // 主题，默认为 'light'，支持响应式或静态传入
}

export function useVChart(options: UseVChartOptions) {
  const chartRef = ref<HTMLElement>() // 模板引用，用于绑定 DOM 元素
  const chartInstance = shallowRef<IVChart | null>(null) // VChart 实例，使用 shallowRef 避免不必要的深度响应
  const isLoading = ref(true) // 加载状态
  const error = ref<Error | null>(null) // 错误对象

  const spec = ref(toValue(options.spec))
  const theme = ref(toValue(options.theme || 'light'))

  const disposeChart = () => {
    if (chartInstance.value) {
      chartInstance.value.release()
      chartInstance.value = null
    }
  }

  const initVChart = async () => {
    await nextTick()

    if (!chartRef.value)
      return

    if (chartInstance.value) {
      disposeChart()
    }

    isLoading.value = true
    error.value = null

    try {
      chartInstance.value = new VChart(unref(spec) as ISpec, {
        dom: unref(chartRef),
        theme: unref(theme),
      })
      await chartInstance.value.renderAsync()
    }
    catch (error: any) {
      error.value = error
      console.error('Error initializing VChart:', error)
    }
    finally {
      isLoading.value = false
    }
  }

  const updateSpec = async (newSpec: ISpec, forceMerge: boolean = true) => {
    if (chartInstance.value) {
      isLoading.value = true
      error.value = null
      try {
        await chartInstance.value.updateSpec(newSpec, forceMerge)
      }
      catch (error: any) {
        error.value = error
        console.error('Error updating VChart spec:', error)
      }
      finally {
        isLoading.value = false
      }
    }
    else {
      // 如果实例未初始化，但 spec 更新了，则尝试重新初始化
      await initVChart()
    }
  }

  const resize = (width: number, height: number) => {
    if (chartInstance.value && !isLoading.value) {
      chartInstance.value.resize(width, height)
    }
  }

  onMounted(() => {
    initVChart()
  })

  const setTheme = (newTheme: VChartTheme) => {
    theme.value = newTheme
    initVChart()
  }

  const dispose = () => {
    disposeChart()
  }

  tryOnUnmounted(dispose)

  return {
    chartRef,
    chartInstance,
    isLoading,
    error,
    updateSpec,
    setTheme,
    resize,
  }
}

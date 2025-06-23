<script setup lang='ts'>
import type { ECOption } from '@henry/vhooks'
import type { ComputedRef } from 'vue'
import { useThemeStore } from '@/stores/modules/theme'
import { useEcharts } from '@henry/vhooks'
import { computed, unref, watch } from 'vue'

defineOptions({ name: 'BarChartCard' })

const props = withDefaults(defineProps<Props>(), {
  height: 90,
  barWidth: '26%',
})

interface Props {
  /** 数值 */
  value: number
  /** 标签 */
  label: string
  /** 百分比 +（绿色）-（红色） */
  percentage: number
  /** 日期 */
  date?: string
  /** 高度 */
  height?: number
  /** 颜色 */
  color?: string
  /** 图表数据 */
  chartData: number[]
  /** 柱状图宽度 */
  barWidth?: string
  /** 是否为迷你图表 */
  isMiniChart?: boolean
}

const themeStore = useThemeStore()

const options: ComputedRef<ECOption> = computed(() => {
  const itemColor = props.color || themeStore.themeColor
  return {
    grid: {
      top: 0,
      right: 0,
      bottom: 15,
      left: 0,
    },
    xAxis: {
      type: 'category',
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: props.chartData,
        type: 'bar',
        barWidth: props.barWidth,
        itemStyle: {
          color: itemColor,
          borderRadius: 2,
        },
      },

    ],
  }
})

const { chartRef, setTheme } = useEcharts(unref(options))

watch(() => themeStore.themeMode, (newTheme) => {
  setTheme(newTheme)
})
</script>

<template>
  <div class="bar-chart-card relative flex-col overflow-hidden">
    <div class="bar-chat-card__info flex-between items-start p-5">
      <div class="bar-chat-card__metric">
        <p class="value text-2xl font-500">
          {{ value }}
        </p>
        <p class="label text-sm opacity-60">
          {{ label }}
        </p>
      </div>
      <div
        class="bar-chat-card__percentage text-sm font-500 space-y-1"
        :class="{
          'is-mini-chart': isMiniChart,
          'flex-between': isMiniChart,
        }"
      >
        <p
          class="percentage"
          :class="{ 'is-increase': percentage > 0 }"
        >
          {{ percentage > 0 ? '+' : '' }}{{ percentage }}%
        </p>
        <p v-if="date" class="date text-xs opacity-60">
          {{ date }}
        </p>
      </div>
    </div>
    <div
      ref="chartRef"
      class="bar-chart-card__chart"
      :class="{ 'is-mini-chart': isMiniChart }"
      :style="{ height: `${props.height}px` }"
    />
  </div>
</template>

<style scoped>
.bar-chart-card {
  min-height: 10rem;
  border-radius: 16px;
  border: 1px solid var(--hb-border-color);
  background-color: var(--hb-background-color);
}

.bar-chat-card__percentage .percentage {
  color: #f56c6c;
}

.bar-chat-card__percentage .is-increase {
  color: #67c23a;
}

.bar-chat-card__percentage.is-mini-chart {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
}

.bar-chart-card__chart {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: calc(100% - 20px);
  height: 90px;
  margin: auto;
}

.bar-chart-card__chart.is-mini-chart {
  position: absolute;
  inset: 25px 20px auto auto;
  width: 40%;
  height: 60px !important;
}
</style>

<script setup lang='ts'>
import type { ECOption } from '@henry/vhooks'
import type { ComputedRef } from 'vue'
import { useThemeStore } from '@/stores/modules/theme'
import { createHoverColor, createPressedColor } from '@/utils/color'
import { echarts, useEcharts } from '@henry/vhooks'
import { computed, unref, watch } from 'vue'

defineOptions({ name: 'LineChartCard' })

const props = withDefaults(defineProps<Props>(), {
  height: 90,
  showArrow: true,
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
  /** 是否显示区域颜色 */
  showAreaColor?: boolean
  /** 图表数据 */
  chartData: number[]
  /** 是否为迷你图表 */
  isMiniChart?: boolean
  /** 是否显示箭头 */
  showArrow?: boolean
}

const themeStore = useThemeStore()

const options: ComputedRef<ECOption> = computed(() => {
  const itemColor = props.color || themeStore.themeColor
  const areaColor = themeStore.darkMode ? createPressedColor(itemColor, 0.96) : createHoverColor(itemColor, 0.96)

  return {
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        data: props.chartData,
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          width: 3,
          color: itemColor,
        },
        areaStyle: props.showAreaColor
          ? {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: itemColor,
                },
                {
                  offset: 1,
                  color: areaColor,
                },
              ]),
            }
          : undefined,
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
  <div class="line-chart-card relative flex-col overflow-hidden">
    <div class="line-chat-card__info flex-between items-start p-5">
      <div class="line-chat-card__metric">
        <p class="value text-2xl font-500">
          {{ value }}
        </p>
        <p class="label text-sm opacity-60">
          {{ label }}
        </p>
      </div>
      <div
        class="line-chat-card__percentage text-sm font-500 space-y-1"
        :class="{
          'is-mini-chart': isMiniChart,
          'flex-between': isMiniChart,
        }"
      >
        <p
          class="percentage flex-row items-center gap-2"
          :class="{ 'is-increase': percentage > 0 }"
        >
          <SvgIcon v-if="showArrow" class="text-xl" :icon="percentage > 0 ? 'ant-design:rise-outlined' : 'ant-design:fall-outlined'" />
          <span>{{ percentage > 0 ? '+' : '' }}{{ percentage }}%</span>
        </p>
        <p v-if="date" class="date text-xs opacity-60">
          {{ date }}
        </p>
      </div>
    </div>
    <div
      ref="chartRef"
      class="line-chart-card__chart"
      :class="{ 'is-mini-chart': isMiniChart }"
      :style="{ height: `${props.height}px` }"
    />
  </div>
</template>

<style scoped>
.line-chart-card {
  min-height: 10rem;
  border-radius: 16px;
  border: 1px solid var(--hb-border-color);
  background-color: var(--hb-background-color);
}

.line-chat-card__percentage .percentage {
  color: #f56c6c;
}

.line-chat-card__percentage .is-increase {
  color: #67c23a;
}

.line-chat-card__percentage.is-mini-chart {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
}

.line-chart-card__chart {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 90px;
}

.line-chart-card__chart.is-mini-chart {
  position: absolute;
  top: 20px;
  right: 20px;
  left: auto;
  width: 40%;
  height: 60px !important;
}
</style>

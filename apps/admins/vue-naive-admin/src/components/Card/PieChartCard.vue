<script setup lang='ts'>
import type { ECOption } from '@henry/vhooks'
import type { ComputedRef } from 'vue'
import { useThemeStore } from '@/stores/modules/theme'
import { useEcharts } from '@henry/vhooks'
import { computed, unref, watch } from 'vue'

defineOptions({ name: 'PieChartCard' })

const props = withDefaults(defineProps<Props>(), {
  height: 118,
  radius: () => ['70%', '90%'],
  format: () => ({ name: 'name', value: 'value' }),
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
  /** 半径 */
  radius?: [string, string]
  /** 图表数据 */
  chartData: any[]
  /** 数据映射 */
  format?: { name: string, value: string }
  /** 是否为迷你图表 */
  isMiniChart?: boolean
}

const themeStore = useThemeStore()

const options: ComputedRef<ECOption> = computed(() => {
  const itemColor = props.color || themeStore.themeColor
  const colors = ['#e6e8f7', itemColor]
  const data = (props.chartData || []).map((item, idx) => {
    return {
      name: item[props.format.name],
      value: item[props.format.value],
      itemStyle: {
        color: colors[idx],
      },
    }
  })

  return {
    legend: {
      left: 'center',
      bottom: 0,
      itemWidth: 10,
      itemHeight: 4,
    },
    series: [
      {
        type: 'pie',
        bottom: 15,
        radius: props.radius,
        label: {
          show: false,
          position: 'center',
        },

        data,
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
  <div class="pie-chart-card relative flex-between p-5 overflow-hidden">
    <div class="pie-chat-card__info flex-1 flex-col">
      <div class="pie-chat-card__metric">
        <p class="value text-2xl font-500">
          {{ value }}
        </p>
        <p class="label text-sm  opacity-60">
          {{ label }}
        </p>
      </div>
      <div
        class="pie-chat-card__percentage flex-row-center gap-2 text-sm font-500"
        :class="{ 'is-mini-chart': isMiniChart }"
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
      class="pie-chart-card__chart"
      :class="{ 'is-mini-chart': isMiniChart }"
      :style="{ height: `${props.height}px` }"
    />
  </div>
</template>

<style scoped>
.pie-chart-card {
  min-height: 10rem;
  border-radius: 16px;
  border: 1px solid var(--hb-border-color);
  background-color: var(--hb-background-color);
}

.pie-chat-card__percentage {
  margin-top: 40px;
}

.pie-chat-card__percentage .percentage {
  color: #f56c6c;
}

.pie-chat-card__percentage .is-increase {
  color: #67c23a;
}

.pie-chart-card__chart {
  width: 40%;
  height: 118px;
}

.pie-chart-card__chart.is-mini-chart {
  height: 100px !important;
}
</style>

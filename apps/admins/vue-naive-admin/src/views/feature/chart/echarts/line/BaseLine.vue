<script setup lang='ts'>
import type { EChartsOption } from '@henry/vhooks'
import { useThemeStore } from '@/stores/modules/theme'
import { echarts, useEcharts } from '@henry/vhooks'
import { watch } from 'vue'
import { weekData } from '../../data'

const seriesData = [150, 230, 224, 218, 135, 147, 260]

const options: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(124, 128, 244, 0)', // 0% 处的颜色
          }, {
            offset: 0.5,
            color: 'rgba(124, 128, 244, 1)', // 100% 处的颜色
          }, {
            offset: 1,
            color: 'rgba(124, 128, 244, 0)', // 100% 处的颜色
          }],
          global: false,
        },
      },
    },
  },
  grid: {
    borderWidth: 0,
    top: '10%',
    right: '5%',
    bottom: '5%',
  },
  xAxis: {
    type: 'category',
    data: weekData,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      showAllSymbol: true,
      symbolSize: 8,
      data: seriesData,
      label: {
        show: true,
        position: 'top',
      },
      itemStyle: {
        borderColor: '#646ace',
        borderWidth: 2,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(124, 128, 244, .3)',

        }, {
          offset: 1,
          color: 'rgba(124, 128, 244, 0)',
        }], false),
        shadowColor: 'rgba(53, 142, 215, 0.9)',
        shadowBlur: 20,
      },
    },
  ],
}

const { chartRef, setTheme } = useEcharts(options)

const themeStore = useThemeStore()

watch(() => themeStore.themeMode, (newTheme) => {
  setTheme(newTheme)
})
</script>

<template>
  <div ref="chartRef" class="h-400px" />
</template>

<style scoped>

</style>

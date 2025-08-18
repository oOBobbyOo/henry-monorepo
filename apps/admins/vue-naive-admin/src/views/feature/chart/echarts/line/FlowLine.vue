<script setup lang='ts'>
import type { EChartsOption } from '@henry/vhooks'
import { useThemeStore } from '@/stores/modules/theme'
import { useEcharts } from '@henry/vhooks'
import { watch } from 'vue'
import { timeData } from '../../data'

const seriesData = [113, 132, 123, 122, 132, 132, 123, 225, 223, 232, 223, 222, 223, 312, 223, 222, 223, 222, 232, 262, 232, 232, 223, 222, 223, 332, 223, 232, 223, 322, 123, 222, 231, 322, 233, 122, 223, 232, 232, 222, 223, 232, 232, 222, 232, 132, 123, 212]

const options: EChartsOption = {
  tooltip: {
    trigger: 'axis',
  },
  grid: [{
    left: 40,
    right: 40,
  }, {
    left: 40,
    right: 40,
  }],
  dataZoom: [{
    show: true,
    realtime: true,
    start: 30,
    end: 70,
    xAxisIndex: [0, 1],
  }, {
    type: 'inside',
    realtime: true,
    start: 30,
    end: 70,
    xAxisIndex: [0, 1],
  }],
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      onZero: true,
    },
    data: timeData,
  }, {
    gridIndex: 1,
  }],
  yAxis: [{
    type: 'value',
    max: 500,
    min: 0,
    interval: 50,
  }, {
    gridIndex: 1,
  }],
  series: [{
    name: '数值',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 9,
    showSymbol: false,
    lineStyle: {
      width: 1,
    },
    markPoint: {
      label: {
        color: '#fff',
      },
      data: [{
        type: 'max',
        name: '最大值',
      }, {
        type: 'min',
        name: '最小值',
      }],
    },
    markLine: {
      data: [
        { type: 'average', name: '平均值' },
      ],
    },
    markArea: {
      silent: true,
      label: {
        position: ['10%', '50%'],
      },
      data: [
        [{
          name: '优',
          yAxis: 100,
          label: {
            color: 'rgba(82, 196, 26, 1)',
          },
          itemStyle: {
            color: 'rgba(82, 196, 26, 0.5)',
          },
        }, {
          yAxis: 200,
        }],
        [{
          name: '良',
          yAxis: 200,
          label: {
            color: 'rgba(25, 189, 122, 1)',
          },
          itemStyle: {
            color: 'rgba(25, 189, 122, 0.5)',
          },
        }, {
          yAxis: 300,
        }],
        [{
          name: '差',
          yAxis: 300,
          label: {
            color: 'rgba(236, 169, 44, 1)',
          },
          itemStyle: {
            color: 'rgba(250, 242, 20, 0.5)',
          },
        }, {
          yAxis: 400,
        }],
      ],
    },
    data: seriesData,
  }],
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

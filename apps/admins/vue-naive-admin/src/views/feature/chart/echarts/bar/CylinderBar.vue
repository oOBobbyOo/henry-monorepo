<script setup lang='ts'>
import type { ECOption } from '@henry/vhooks'
import { useEcharts } from '@henry/vhooks'
import { monthData } from '../../data'

const seriesData = [10, 20, 30, 10, 20, 30, 10, 20, 30, 10, 20, 30]

const options: ECOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
    padding: [20, 20, 20, 20],
  },
  grid: {
    borderWidth: 0,
    top: '10%',
    right: '5%',
    bottom: '5%',
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.5)',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitArea: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        color: '#32ABCC',
        fontSize: 12,
      },
      data: monthData,
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
          width: 1,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#32ABCC',
        fontSize: 12,
        formatter: '{value} %',
      },
      splitArea: {
        show: false,
      },
    },
  ],
  series: [
    // 柱底圆片
    {
      name: '在线率',
      yAxisIndex: 0,
      type: 'pictorialBar',
      symbolSize: [20, 10], // 调整截面形状
      symbolOffset: [0, 5],
      z: 12,
      tooltip: {
        show: true,
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#1BD4F9', // 0% 处的颜色
          }, {
            offset: 1,
            color: '#1F79E2', // 100% 处的颜色
          }],
          global: false, // 缺省为 false
        },
      },
      data: seriesData,
    },
    // 柱体
    {
      name: '在线率',
      type: 'bar',
      barWidth: 20,
      yAxisIndex: 0,
      barGap: '0%',
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#057DFE', // 0% 处的颜色
          }, {
            offset: 1,
            color: '#02D7EA', // 100% 处的颜色
          }],
          global: false, // 缺省为 false
        },
      },
      data: seriesData,
    },
    // 柱顶圆片
    {
      name: '在线率',
      type: 'pictorialBar',
      yAxisIndex: 0,
      symbolSize: [20, 10], // 调整截面形状
      symbolOffset: [0, -5],
      z: 12,
      tooltip: {
        show: false,
      },
      symbolPosition: 'end',
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#50A7FF', // 0% 处的颜色
          }, {
            offset: 1,
            color: '#02D6EA', // 100% 处的颜色
          }],
          global: false, // 缺省为 false
        },
      },
      label: {
        show: true,
        fontSize: 13,
        color: '#a8d5ff',
        position: 'top',
        formatter: '{c}%',
      },
      data: seriesData,
    },
    // 涟漪特效
    {
      type: 'effectScatter',
      silent: true,
      tooltip: {
        show: false,
      },
      zlevel: 3,
      symbolSize: 10,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke',
        color: '#3cefff',
        scale: 5,
      },
      itemStyle: {
        color: '#3cefff',
      },
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
}

const { chartRef } = useEcharts(options)
</script>

<template>
  <div ref="chartRef" class="h-400px" />
</template>

<style scoped>

</style>

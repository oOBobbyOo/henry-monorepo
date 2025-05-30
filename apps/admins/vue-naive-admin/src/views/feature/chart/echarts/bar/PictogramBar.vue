<script setup lang='ts'>
import type { ECOption } from '@henry/vhooks'
import { echarts, useEcharts } from '@henry/vhooks'
import { month } from '../../data'

const seriesData = [498, 520, 568, 432, 464, 332, 344, 458, 470, 468, 398, 310]

const options: ECOption = {
  backgroundColor: '#031d33',
  animation: true,
  grid: {
    top: '5%',
    bottom: '5%',
    right: '5%',
  },
  tooltip: {
    show: true,
  },
  xAxis: {
    data: month,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
        width: 1,
      },
    },
    axisLabel: {
      show: true,
      interval: 0,
      fontSize: 13,
      color: '#a8d5ff',
    },
  },
  yAxis: [
    {
      type: 'value',
      gridIndex: 0,
      min: 0,
      interval: 100,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
          width: 1,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
        },
      },
      axisLabel: {
        show: true,
        fontSize: 13,
        color: '#a8d5ff',
      },
    },
  ],
  series: [
    {
      name: '设备在线率',
      type: 'bar',
      barWidth: 16,
      label: {
        show: true,
        position: 'top',
        color: '#a8d5ff',
        fontSize: 13,
      },
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(146, 225, 255, 1)',
          },
          {
            offset: 1,
            color: 'rgba(0, 151, 251, 1)',
          },
        ]),
      },
      data: seriesData,
      z: 10,
      zlevel: 0,
    },
    {
      type: 'pictorialBar',
      itemStyle: {
        color: '#0F375F',
      },
      symbolRepeat: 'fixed',
      symbolMargin: 6,
      symbol: 'rect',
      symbolClip: true,
      symbolSize: [18, 2],
      symbolPosition: 'start',
      symbolOffset: [1, 1],
      data: seriesData,
      barWidth: 2,
      z: 0,
      zlevel: 1,
    },
    {
      name: '外框',
      type: 'bar',
      barGap: '-110%',
      data: [100, 100, 100, 100, 100, 100, 100],
      barWidth: 16,
      label: {
        show: false,
      },
      itemStyle: {
        color: 'transparent',
      },
      z: 0,
    },
    {
      name: '背影',
      type: 'line',
      smooth: true,
      showAllSymbol: false,
      symbolSize: 0,
      lineStyle: {
        width: 0,
      },
      areaStyle: {
        color: 'rgba(0, 151, 251, 0.1)',
      },
      data: seriesData,
      z: 5,
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

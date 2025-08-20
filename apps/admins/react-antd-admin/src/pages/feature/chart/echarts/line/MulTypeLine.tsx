import type { EChartsOption } from '@henry/rhooks'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { useEcharts } from '@henry/rhooks'
import { useEffect } from 'react'
import { monthData } from '../../data'

function MulTypeLine() {
  const { themeMode } = useThemeScheme()

  const seriesData = [
    {
      name: '已采纳',
      data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
    },
    {
      name: '已发布',
      data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
    },
  ]

  const options: EChartsOption = {
    grid: {
      top: '15%',
      right: '5%',
      bottom: '5%',
    },
    tooltip: {
      show: true,
      trigger: 'axis',
    },
    legend: {
      show: true,
      top: '5%',
      icon: 'stack',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#1bb4f6',
      },
      data: [seriesData[0].name, seriesData[1].name],
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: '#2ad1d2',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#397cbc',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#195384',
          },
        },
        data: monthData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 1000,
        axisLabel: {
          formatter: '{value}',
          color: '#2ad1d2',
        },
        axisLine: {
          lineStyle: {
            color: '#27b4c2',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#11366e',
          },
        },
      },
    ],
    series: [
      {
        name: seriesData[0].name,
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#0092f6',
        },
        data: seriesData[0].data,
      },
      {
        name: seriesData[1].name,
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#00d4c7',
        },
        lineStyle: {
          type: 'dotted',
        },
        data: seriesData[1].data,
      },
    ],
  }

  const { chartRef, setTheme } = useEcharts(options)

  useEffect(() => {
    setTheme(themeMode)
  }, [themeMode, setTheme])

  return <div ref={chartRef} className="h-400px"></div>
}

export default MulTypeLine

import type { EChartsOption } from '@henry/rhooks'
import { useThemeScheme } from '@/hooks/useThemeScheme'
import { echarts, useEcharts } from '@henry/rhooks'
import { useEffect } from 'react'
import { hourData } from '../../data'

function AreaLine() {
  const { themeMode } = useThemeScheme()

  const seriesData = [
    {
      name: '用户注册成功率(%)',
      key: 'register',
      data: [180, 240, 60, 80, 120, 160, 170, 100, 120, 110, 180, 250],
    },
    {
      name: '用户登录成功率(%)',
      key: 'login',
      data: [150, 200, 110, 170, 300, 160, 100, 130, 190, 210, 190, 360],
    },
  ]

  const options: EChartsOption = {
    legend: {
      show: true,
      right: '5%',
      top: '5%',
      itemGap: 20,
      itemHeight: 10,
      data: [
        {
          name: seriesData[0].name,
          icon: 'circle',
          textStyle: {
            color: '#00DAFF',
          },
        },
        {
          name: seriesData[1].name,
          icon: 'circle',
          textStyle: {
            color: '#0c77e9ff',
          },
        },
      ],
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        label: {
          show: true,
          backgroundColor: '#fff',
          color: '#556677',
          borderColor: 'rgba(0,0,0,0)',
          shadowColor: 'rgba(0,0,0,0)',
          shadowOffsetY: 0,
        },
        lineStyle: {
          width: 0,
        },
      },
      backgroundColor: '#fff',
      textStyle: {
        color: '#5c6c7c',
      },
    },
    grid: {
      top: '15%',
      right: '5%',
      bottom: '5%',
    },
    xAxis: [
      {
        type: 'category',
        data: hourData,
        axisLine: {
          lineStyle: {
            color: '#0173DA',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          color: '#0173DA',
          fontSize: 12,
        },
        boundaryGap: false,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#0173DA',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#0173DA',
          },
        },
        axisLabel: {
          color: '#0173DA',
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#0173DA',
          },
        },
      },
      {
        type: 'value',
        position: 'right',
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: '#0173DA',
          formatter: '{value}',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#0173DA',
          },
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: seriesData[0].name,
        type: 'line',
        data: seriesData[0].data,
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: '#00DAFF',
        },
        itemStyle: {
          color: '#00DAFF',
          borderColor: '#00DAFF',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#00DAFF',
              },
              {
                offset: 1,
                color: 'rgba(103, 182, 232, 0)',
              },
            ],
            false,
          ),
        },
      },
      {
        name: seriesData[1].name,
        type: 'line',
        data: seriesData[1].data,
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
          width: 2,
          color: '#0c77e9ff',
        },
        itemStyle: {
          color: '#0c77e9ff',
          borderColor: '#0c77e9ff',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#784cd9ff',
              },
              {
                offset: 1,
                color: 'rgba(45, 80, 233, 0)',
              },
            ],
            false,
          ),
        },
      },
    ],
  }

  const { chartRef, setTheme } = useEcharts(options)

  useEffect(() => {
    setTheme(themeMode)
  }, [themeMode, setTheme])

  return <div ref={chartRef} className="h-400px"></div>
}

export default AreaLine

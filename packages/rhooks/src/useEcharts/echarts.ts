import type {
  BarSeriesOption,
  EffectScatterSeriesOption,
  GaugeSeriesOption,
  LineSeriesOption,
  MapSeriesOption,
  PictorialBarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  ScatterSeriesOption,
} from 'echarts/charts'

import type {
  DatasetComponentOption,
  DataZoomComponentOption,
  GridComponentOption,
  LegendComponentOption,
  MarkAreaComponentOption,
  MarkLineComponentOption,
  MarkPointComponentOption,
  TimelineComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
} from 'echarts/components'

import { BarChart, EffectScatterChart, GaugeChart, LineChart, MapChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'

import {
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'

import * as echarts from 'echarts/core'

import { LabelLayout, UniversalTransition } from 'echarts/features'

import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'

export type EChartsOption = echarts.ComposeOption<
  | BarSeriesOption
  | EffectScatterSeriesOption
  | GaugeSeriesOption
  | LineSeriesOption
  | MapSeriesOption
  | PieSeriesOption
  | PictorialBarSeriesOption
  | RadarSeriesOption
  | ScatterSeriesOption
  | DatasetComponentOption
  | DataZoomComponentOption
  | GridComponentOption
  | LegendComponentOption
  | MarkAreaComponentOption
  | MarkLineComponentOption
  | MarkPointComponentOption
  | TimelineComponentOption
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
>
export type ECharts = echarts.ECharts
export type SetOptionOpts = echarts.SetOptionOpts

echarts.use([
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  BarChart,
  EffectScatterChart,
  GaugeChart,
  LineChart,
  MapChart,
  PieChart,
  PictorialBarChart,
  RadarChart,
  ScatterChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  SVGRenderer,
])

export { echarts }

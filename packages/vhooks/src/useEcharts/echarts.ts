import type {
  BarSeriesOption,
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
  GridComponentOption,
  LegendComponentOption,
  TimelineComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
} from 'echarts/components'

import { BarChart, GaugeChart, LineChart, MapChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'

import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'

import * as echarts from 'echarts/core'

import { LabelLayout, UniversalTransition } from 'echarts/features'

import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'

export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | GaugeSeriesOption
  | LineSeriesOption
  | MapSeriesOption
  | PieSeriesOption
  | PictorialBarSeriesOption
  | RadarSeriesOption
  | ScatterSeriesOption
  | DatasetComponentOption
  | GridComponentOption
  | LegendComponentOption
  | TimelineComponentOption
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption

>

echarts.use([
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
  BarChart,
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

// @see https://www.visactor.com/vchart/guide/tutorial_docs/Basic/How_to_Import_VChart

import type { ITheme } from '@visactor/vchart'
// 引入 VChart 核心模块
import { VChart } from '@visactor/vchart'
// 引入柱状图
import { registerBarChart } from '@visactor/vchart'
// 引入坐标轴、Tooltip、CrossHair组件
import { registerCartesianCrossHair, registerDomTooltipHandler, registerTooltip } from '@visactor/vchart'
// 引入主题
import dark from '@visactor/vchart-theme/public/dark.json'
import light from '@visactor/vchart-theme/public/light.json'

// 注册主题
VChart.ThemeManager.registerTheme('light', light as ITheme)
VChart.ThemeManager.registerTheme('dark', dark as ITheme)

// 注册图表和组件
VChart.useRegisters([registerBarChart, registerTooltip, registerDomTooltipHandler, registerCartesianCrossHair])

export { VChart }

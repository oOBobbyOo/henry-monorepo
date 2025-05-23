import type { ImportMetaEnv } from '@henry/types'
import path from 'node:path'
import process from 'node:process'

// @see https://github.com/btd/rollup-plugin-visualizer
import { visualizer } from 'rollup-plugin-visualizer'

export function setupVisualizerPlugin(viteEnv: ImportMetaEnv) {
  const { VITE_APP_ENV } = viteEnv
  const isProd = VITE_APP_ENV === 'prod'

  return isProd && visualizer({
    filename: path.resolve(process.cwd(), '.visualizer/stats.html'), // 生成文件路径，支持相对路径或绝对路径
    template: 'treemap', // 可视化样式类型: 'sunburst' | 'treemap' | 'network' | 'raw-data' | 'list' | 'flamegraph', 默认 'treemap'
    open: true, // 构建后自动打开报告页面
    gzipSize: true, // 显示 gzip 大小
    brotliSize: true, // 显示 brotli 大小
  })
}

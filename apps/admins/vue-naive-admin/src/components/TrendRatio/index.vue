<script setup lang='ts'>
defineOptions({ name: 'TrendRatio' })

defineProps<Props>()

interface Props {
  /** 标签 */
  label: string
  /** 数值 */
  value: number
  /** 图标 */
  icon?: string
  /** 图标大小 */
  iconSize?: number
  /** 颜色 */
  color?: string
  /** 前缀 */
  prefix?: string
  /** 后缀 */
  suffix?: string
  /** 起始值 0 */
  // startVal?: number
  /** 结束值 2017 */
  // endVal?: number
  /** 持续时间（毫秒）3000 */
  // duration?: number
  /** 自动播放 true */
  // autoplay?: boolean
  /** 显示的小数位数 0 */
  // decimals?: number
  /** 分割小数 . */
  // decimal?: string
  /** 分隔符 , */
  // separator?: string
  /** 使用缓动函数 true */
  // useEasing?: boolean
  /** 缓动函数 */
  // easingFn?: (progress: number, localStartVal: number, intervalVal: number, localDuration: number) => number
  // start?: () => void
  // pause?: () => void
  // reset?: () => void
}
</script>

<template>
  <div class="flex items-center gap-1 text-ellipsis text-xs">
    <span>{{ label }}</span>
    <CountTo
      :end-val="value"
      :color="color"
      :prefix="prefix"
      :suffix="suffix"
      v-bind="$attrs"
    />
    <SvgIcon v-if="icon" :icon="icon" :style="{ color, fontSize: `${iconSize}px` }" />
  </div>
</template>

<style scoped>

</style>

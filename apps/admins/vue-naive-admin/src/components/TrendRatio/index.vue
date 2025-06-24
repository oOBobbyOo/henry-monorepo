<script setup lang='ts'>
import { computed } from 'vue'

defineOptions({ name: 'TrendRatio' })

const props = defineProps<Props>()

interface Props {
  /** 标签 */
  label: string
  /** 数值 */
  value: number
  /** 是否显示箭头 */
  showArrow?: boolean
  /** 颜色 */
  color?: string
  /** 图标大小 */
  iconSize?: number
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

const color = computed(() => props.color || (props.value > 0 ? '#67c23a' : '#f56c6c'))
</script>

<template>
  <div class="trend-ratio flex items-center gap-1 text-ellipsis text-xs">
    <span>{{ label }}</span>
    <CountTo
      :end-val="value"
      :prefix="prefix"
      :suffix="suffix"
      :style="{ color }"
      v-bind="$attrs"
    />
    <SvgIcon v-if="showArrow" :icon="value > 0 ? 'ant-design:rise-outlined' : 'ant-design:fall-outlined'" :style="{ color, fontSize: `${iconSize}px` }" />
  </div>
</template>

<style scoped>

</style>

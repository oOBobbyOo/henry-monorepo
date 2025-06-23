<script setup lang='ts'>
import type { ProgressProps } from 'naive-ui'
import { useAttrs } from 'vue'

defineOptions({ name: 'ProgressCard' })

interface Props extends /* @vue-ignore */ ProgressProps {
  /** 标题 */
  title?: string
  /** 图标 */
  icon?: string
  /** 图标颜色 */
  iconColor?: string
  /** 图标背景颜色 */
  iconBgColor?: string
  /** 图标大小 */
  iconSize?: number
  /** 图标圆角大小 */
  iconBgRadius?: string
}

const { title, icon, iconBgColor, iconColor, iconSize, iconBgRadius = '50%', ...restAttrs }: Props = useAttrs()
</script>

<template>
  <div class="progress-card relative flex-col justify-center p-5 overflow-hidden">
    <div class="progress-card_info mb-4 flex-between">
      <div
        v-if="icon"
        class="progress-card__icon flex-center w-12 h-12 text-xl !dark:bg-gray-800"
        :style="{
          backgroundColor: iconBgColor,
          color: iconColor,
          fontSize: `${iconSize}px`,
          borderRadius: iconBgRadius,
        }"
      >
        <SvgIcon :icon="icon" />
      </div>
      <div class="progress-card__title" :style="{ color: iconColor }">
        <CountTo
          class="mb-1 text-2xl font-600"
          :end-val="restAttrs.percentage"
          :duration="3000"
          suffix="%"
        />
        <p v-if="title" class="text-sm opacity-60">
          {{ title }}
        </p>
      </div>
    </div>
    <div class="progress-card_progress flex-center">
      <NProgress processing :show-indicator="false" v-bind="restAttrs" />
    </div>
  </div>
</template>

<style scoped>
.progress-card {
  min-height: 8rem;
  border-radius: 16px;
  border: 1px solid var(--hb-border-color);
  background-color: var(--hb-background-color);
}
</style>

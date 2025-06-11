<script setup lang='ts'>
import type { ProgressProps } from 'naive-ui'
import { useAttrs } from 'vue'

defineOptions({ name: 'ProgressCard' })

interface Props extends /* @vue-ignore */ ProgressProps {
  title?: string
  icon?: string
  iconBgColor?: string
  iconColor?: string
  iconSize?: number
}

const { title, icon, iconBgColor, iconColor, iconSize, ...restAttrs }: Props = useAttrs()
</script>

<template>
  <div class="progress-card relative flex-col justify-center">
    <div class="progress-card_info mb-2 flex-between">
      <div
        v-if="icon"
        class="progress-card__icon flex-center w-12 h-12 rd-2 text-xl"
        :style="{ backgroundColor: iconBgColor, color: iconColor, fontSize: `${iconSize}px` }"
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
  padding: 1.5rem;
  min-height: 8rem;
  border: 1px solid rgb(239, 239, 245);
  border-radius: 16px;
  background-color: #fff;
}
</style>

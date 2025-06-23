<script setup lang='ts'>
defineOptions({ name: 'StatsCard' })

withDefaults(defineProps<Props>(), {
  iconBgColor: 'transparent',
  iconColor: '#fff',
  iconSize: 20,
  iconBgRadius: '50%',
})

interface Props {
  /** 图标 */
  icon?: string
  /** 标题 */
  title?: string
  /** 数值 */
  count?: number
  /** 描述 */
  description: string
  /** 图标颜色 */
  iconColor?: string
  /** 图标背景颜色 */
  iconBgColor?: string
  /** 图标大小 */
  iconSize?: number
  /** 图标圆角大小 */
  iconBgRadius?: string
  /** 文本颜色 */
  textColor?: string
  /** 背景颜色 */
  backgroundColor?: string
}
</script>

<template>
  <div class="stats-card relative flex-y-center gap-4 p-5 overflow-hidden cursor-pointer" :style="{ backgroundColor }">
    <div
      v-if="icon"
      class="stats-card__icon flex-center w-12 h-12"
      :style="{
        backgroundColor: iconBgColor,
        color: iconColor,
        fontSize: `${iconSize}px`,
        borderRadius: iconBgRadius,
      }"
    >
      <SvgIcon :icon="icon" />
    </div>
    <div class="stats-card__content flex-1 dark:text-white" :style="{ color: textColor }">
      <p v-if="count" class="text-2xl font-600">
        <NNumberAnimation :from="0" :to="count" :active="true" :show-separator="true" :precision="2" />
      </p>
      <p v-if="title" class="mb-1 text-xl font-600 ">
        {{ title }}
      </p>
      <p v-if="description" class="opacity-60" v-html="description" />
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  min-height: 8rem;
  border-radius: 16px;
  border: 1px solid var(--hb-border-color);
  background-color: var(--hb-background-color);
  transition: transform 0.2s ease;
}
.stats-card:hover {
  transform: translateY(-5px);
}
</style>

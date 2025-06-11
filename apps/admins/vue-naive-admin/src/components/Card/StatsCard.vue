<script setup lang='ts'>
defineOptions({ name: 'StatsCard' })

withDefaults(defineProps<Props>(), {
  backgroundColor: '#fff',
  iconBgColor: 'transparent',
  iconColor: '#fff',
  iconSize: 20,
  textColor: '#071437',
})

interface Props {
  icon: string
  title?: string
  count?: number
  description: string
  iconColor?: string
  iconBgColor?: string
  iconSize?: number
  textColor?: string
  backgroundColor?: string
  showArrow?: boolean
}
</script>

<template>
  <div class="stats-card relative flex-y-center gap-4 cursor-pointer" :style="{ backgroundColor }">
    <div
      v-if="icon"
      class="stats-card__icon flex-center w-12 h-12 rd-50%"
      :style="{ backgroundColor: iconBgColor, color: iconColor, fontSize: `${iconSize}px` }"
    >
      <SvgIcon :icon="icon" />
    </div>
    <div class="stats-card__content flex-1" :style="{ color: textColor }">
      <p v-if="count" class="text-2xl font-600">
        <NNumberAnimation :from="0" :to="count" :active="true" :show-separator="true" :precision="2" />
      </p>
      <p v-if="title" class="mb-1 text-xl font-600">
        {{ title }}
      </p>
      <p v-if="description" class="opacity-70" v-html="description" />
    </div>
  </div>
</template>

<style scoped>
.stats-card {
  padding: 1.5rem;
  min-height: 8rem;
  border: 1px solid rgb(239, 239, 245);
  border-radius: 16px;
  transition: transform 0.2s ease;
}
.stats-card:hover {
  transform: translateY(-5px);
}
</style>

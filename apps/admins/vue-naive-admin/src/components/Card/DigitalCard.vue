<script setup lang='ts'>
defineOptions({ name: 'DigitalCard' })

withDefaults(defineProps<Props>(), {
  count: 0,
})

interface Props {
  /** 标题 */
  title: string
  /** 数值 */
  count?: number
  /** 颜色 */
  color?: string
  /** 图标 */
  icon?: string
  /** 图标大小 */
  iconSize?: number
}
</script>

<template>
  <div class="digital-card relative p-5 overflow-hidden cursor-pointer">
    <div class="digital-card-head flex-between">
      <span>{{ title }}</span>
      <SvgIcon v-if="icon" class="text-xl" :icon="icon" :style="{ fontSize: `${iconSize}px` }" />
    </div>
    <div class="digital-card-body flex-col gap-y-1">
      <CountTo
        class="text-3xl font-600"
        :end-val="count"
        :color="color"
        :duration="3000"
      />
      <slot name="body">
        <div class="flex items-center gap-2 py-2">
          <TrendRatio
            label="周同比"
            :value="12"
            suffix="%"
            icon="material-symbols:arrow-drop-up"
            color="#22c55e"
          />
          <TrendRatio
            label="日同比"
            :value="12"
            suffix="%"
            icon="material-symbols:arrow-drop-up"
            color="#22c55e"
          />
        </div>
      </slot>
    </div>
    <div class="digital-card-foot flex-between pt-2">
      <slot name="foot">
        <TrendRatio label="周销售额" prefix="￥" :value="1234" />
        <TrendRatio label="周销售额" prefix="￥" :value="1234" />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.digital-card {
  min-height: 8rem;
  border-radius: 16px;
  border: 1px solid var(--hb-border-color);
  background-color: var(--hb-background-color);
  transition: transform 0.2s ease;
}
.digital-card:hover {
  transform: translateY(-5px);
}

.digital-card-foot {
  border-top: 1px solid var(--hb-border-color);
}
</style>

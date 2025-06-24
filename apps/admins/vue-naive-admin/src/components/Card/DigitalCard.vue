<script setup lang='ts'>
defineOptions({ name: 'DigitalCard' })

withDefaults(defineProps<Props>(), {
  count: 0,
})

interface Option {
  label: string
  radio: number
  value: number
}

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
  /** 图标颜色 */
  iconColor?: string
  day?: Option
  week?: Option
  month?: Option
}
</script>

<template>
  <div class="digital-card relative p-5 overflow-hidden cursor-pointer">
    <div class="digital-card-head flex-between">
      <span>{{ title }}</span>
      <SvgIcon v-if="icon" class="text-xl" :icon="icon" :style="{ color: iconColor, fontSize: `${iconSize}px` }" />
    </div>
    <div class="digital-card-body flex-col gap-y-1">
      <CountTo
        class="text-3xl font-600"
        :end-val="count"
        :duration="3000"
        :style="{ color }"
      />
      <slot name="body">
        <div class="flex items-center gap-2 py-2">
          <TrendRatio
            v-if="month"
            :label="`${month.label}同比`"
            :value="month.radio"
            suffix="%"
            :show-arrow="true"
            :icon-size="iconSize"
          />
          <TrendRatio
            v-if="week"
            :label="`${week.label}同比`"
            :value="week.radio"
            suffix="%"
            :show-arrow="true"
            :icon-size="iconSize"
          />
          <TrendRatio
            v-if="day"
            :label="`${day.label}同比`"
            :value="day.radio"
            suffix="%"
            :show-arrow="true"
            :icon-size="iconSize"
          />
        </div>
      </slot>
    </div>
    <div class="digital-card-foot flex-between pt-2">
      <slot name="foot">
        <TrendRatio
          v-if="month"
          :label="`${month.label}销售额`"
          :value="month.value"
          :color="color"
          prefix="￥"
        />
        <TrendRatio
          v-if="week"
          :label="`${week.label}销售额`"
          :value="week.value"
          :color="color"
          prefix="￥"
        />
        <TrendRatio
          v-if="day"
          :label="`${day.label}销售额`"
          :value="day.value"
          :color="color"
          prefix="￥"
        />
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

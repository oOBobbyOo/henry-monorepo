<script setup lang='ts'>
import type { PopoverPlacement } from 'naive-ui'

defineOptions({ name: 'ButtonIcon' })

const props = withDefaults(defineProps<ButtonIconProps>(), {
  class: '',
  icon: '',
  content: '',
  placement: 'bottom',
  zIndex: 999,
})

interface ButtonIconProps {
  class?: string
  icon?: string
  content?: string
  placement?: PopoverPlacement
  zIndex?: number
}
</script>

<template>
  <NTooltip :placement="placement" :z-index="zIndex" :disabled="!content">
    <template #trigger>
      <NButton quaternary :class="`text-size-lg ${props.class}`" v-bind="$attrs">
        <div class="flex-center gap-2">
          <slot>
            <SvgIcon :icon="icon" />
          </slot>
        </div>
      </NButton>
    </template>
    {{ content }}
  </NTooltip>
</template>

<style scoped>

</style>

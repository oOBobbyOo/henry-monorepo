<script setup lang='ts'>
import type { PopoverPlacement } from 'naive-ui'

defineOptions({ name: 'ButtonIcon' })

const props = withDefaults(defineProps<ButtonIconProps>(), {
  class: '',
  icon: '',
  content: '',
  placement: 'bottom',
  zIndex: 98,
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
  <n-tooltip :placement="placement" :z-index="zIndex" :disabled="!content">
    <template #trigger>
      <n-button quaternary :class="`h-8 ${props.class}`" v-bind="$attrs">
        <div class="flex-center gap-2">
          <slot />
        </div>
      </n-button>
    </template>
  </n-tooltip>
</template>

<style scoped>

</style>

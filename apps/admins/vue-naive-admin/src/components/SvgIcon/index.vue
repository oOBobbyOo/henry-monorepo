<script setup lang='ts'>
import { Icon } from '@iconify/vue'
import { computed, useAttrs } from 'vue'

defineOptions({ name: 'SvgIcon' })

const { icon } = defineProps<SvgIconProps>()

interface SvgIconProps {
  icon?: string
}

const localPrefix = 'local:'

const isLocalIcon = computed(() => {
  return icon && icon.startsWith(localPrefix)
})

const attrs = useAttrs()

const bindAttrs = computed<{ class: string, style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || '',
}))

const symbolId = computed(() => {
  const { VITE_ICON_LOCAL_PREFIX: prefix } = import.meta.env
  const defaultLocalIcon = 'no-icon'
  const iconName = icon?.replace(localPrefix, '') || defaultLocalIcon
  return `#${prefix}-${iconName}`
})
</script>

<template>
  <template v-if="isLocalIcon">
    <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs">
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </template>
  <template v-else>
    <Icon v-if="icon" :icon="icon" v-bind="bindAttrs" />
  </template>
</template>

<style scoped>

</style>

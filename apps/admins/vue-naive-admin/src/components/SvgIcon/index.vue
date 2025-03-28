<script setup lang='ts'>
import { Icon } from '@iconify/vue'
import { computed, useAttrs } from 'vue'

defineOptions({ name: 'SvgIcon' })

const { icon } = defineProps<SvgIconProps>()

interface SvgIconProps {
  icon?: string
}

const isLocalIcon = computed(() => {
  return icon && icon.startsWith('local:')
})

const attrs = useAttrs()

const bindAttrs = computed<{ class: string, style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || '',
}))

const symbolId = computed(() => {
  return icon && icon.replace('local:', '')
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

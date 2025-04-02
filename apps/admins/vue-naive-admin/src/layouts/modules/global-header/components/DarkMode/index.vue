<script setup lang='ts'>
import type { PopoverPlacement } from 'naive-ui'
import { toggleDark } from '@/composables/dark'
import { computed } from 'vue'

defineOptions({ name: 'DarkMode' })

const props = withDefaults(defineProps<DarkModeProps>(), {
  showTooltip: true,
  placement: 'bottom',
})

interface DarkModeProps {
  themeSchema: 'dark' | 'light'
  showTooltip?: boolean
  placement?: PopoverPlacement
}

const icons = {
  light: 'ri:sun-line',
  dark: 'ri:moon-line',
}

const icon = computed(() => icons[props.themeSchema])

const content = computed(() => {
  if (!props.showTooltip)
    return ''

  return '主题模式'
})
</script>

<template>
  <ButtonIcon :icon="icon" :content="content" :placement="placement" @click="toggleDark" />
</template>

<style scoped>

</style>

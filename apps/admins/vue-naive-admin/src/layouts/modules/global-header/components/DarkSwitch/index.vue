<script setup lang='ts'>
import type { PopoverPlacement } from 'naive-ui'
import { toggleDark } from '@/composables/dark'
import { $t } from '@/locales'
import { computed } from 'vue'

defineOptions({ name: 'DarkSwitch' })

const props = withDefaults(defineProps<Props>(), {
  showTooltip: true,
  placement: 'bottom',
})

interface Props {
  darkMode: boolean
  showTooltip?: boolean
  placement?: PopoverPlacement
}

const icons = {
  light: 'ri:sun-line',
  dark: 'ri:moon-line',
}

const icon = computed(() => {
  return props.darkMode ? icons.dark : icons.light
})

const content = computed(() => {
  if (!props.showTooltip)
    return ''

  return $t('header.themeSchema')
})
</script>

<template>
  <ButtonIcon circle :icon="icon" :content="content" :placement="placement" @click="toggleDark" />
</template>

<style scoped>

</style>

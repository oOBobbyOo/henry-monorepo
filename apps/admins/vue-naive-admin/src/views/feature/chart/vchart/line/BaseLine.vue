<script setup lang='ts'>
import type { ISpec } from '@henry/vhooks'
import { useThemeStore } from '@/stores/modules/theme'
import { useVChart } from '@henry/vhooks'
import { watch } from 'vue'

const themeStore = useThemeStore()

const spec: ISpec = {
  type: 'line',
  data: {
    values: [
      {
        time: '2:00',
        value: 8,
      },
      {
        time: '4:00',
        value: 9,
      },
      {
        time: '6:00',
        value: 11,
      },
      {
        time: '8:00',
        value: 14,
      },
      {
        time: '10:00',
        value: 16,
      },
      {
        time: '12:00',
        value: 17,
      },
      {
        time: '14:00',
        value: 17,
      },
      {
        time: '16:00',
        value: 16,
      },
      {
        time: '18:00',
        value: 15,
      },
    ],
  },
  xField: 'time',
  yField: 'value',
  animationAppear: {
    duration: 1000, // 动画持续时间，单位为毫秒(ms)
    easing: 'cubicInOut', // 动画缓动效果
  },
}

const { chartRef, setTheme } = useVChart({ spec, theme: themeStore.themeMode })

watch(() => themeStore.themeMode, (newTheme) => {
  setTheme(newTheme)
})
</script>

<template>
  <div ref="chartRef" class="h-400px" />
</template>

<style scoped>

</style>

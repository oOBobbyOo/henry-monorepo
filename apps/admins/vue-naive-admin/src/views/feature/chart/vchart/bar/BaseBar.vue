<script setup lang='ts'>
import { useThemeStore } from '@/stores/modules/theme'
import { useVChart } from '@henry/vhooks'
import { onMounted, watch } from 'vue'

const themeStore = useThemeStore()

const spec = {
  type: 'bar',
  data: [
    {
      id: 'barData',
      values: [
        { month: 'Monday', sales: 22 },
        { month: 'Tuesday', sales: 13 },
        { month: 'Wednesday', sales: 25 },
        { month: 'Thursday', sales: 29 },
        { month: 'Friday', sales: 38 },
        { month: 'Saturday', sales: 15 },
        { month: 'Sunday', sales: 45 },
      ],
    },
  ],
  xField: 'month',
  yField: 'sales',
  animationNormal: {
    bar: [
      {
        loop: true,
        startTime: 100,
        oneByOne: 100,
        timeSlices: [
          {
            delay: 1000,
            effects: {
              channel: {
                fillOpacity: { to: 0.5 },
              },
              easing: 'linear',
            },
            duration: 500,
          },
          {
            effects: {
              channel: {
                fillOpacity: { to: 1 },
              },
              easing: 'linear',
            },
            duration: 500,
          },
        ],
      },
    ],
  },
}

const { chartRef, updateSpec, setTheme } = useVChart({ spec, theme: themeStore.themeMode })

onMounted(() => {
  setTimeout(() => {
    updateSpec({
      type: 'bar',
      data: [
        {
          id: 'barData',
          values: [
            { month: 'Monday', sales: 12 },
            { month: 'Tuesday', sales: 3 },
            { month: 'Wednesday', sales: 5 },
            { month: 'Thursday', sales: 39 },
            { month: 'Friday', sales: 28 },
            { month: 'Saturday', sales: 6 },
            { month: 'Sunday', sales: 36 },
          ],
        },
      ],
    })
  }, 2000)
})

watch(() => themeStore.themeMode, (newTheme) => {
  setTheme(newTheme)
})
</script>

<template>
  <div ref="chartRef" class="h-400px" />
</template>

<style scoped>

</style>

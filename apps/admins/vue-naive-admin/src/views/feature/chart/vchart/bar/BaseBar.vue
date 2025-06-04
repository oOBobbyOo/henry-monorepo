<script setup lang='ts'>
import { useThemeStore } from '@/stores/modules/theme'
import { useVChart } from '@henry/vhooks'
import { computed, onMounted, watch } from 'vue'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.darkMode ? 'dark' : 'light')

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
      ],
    },
  ],
  xField: 'month',
  yField: 'sales',
}

const { chartRef, updateSpec, setTheme } = useVChart({ spec, theme })

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
          ],
        },
      ],
    })
  }, 2000)
})

watch(theme, (newTheme) => {
  setTheme(newTheme)
})
</script>

<template>
  <div ref="chartRef" class="h-400px" />
</template>

<style scoped>

</style>

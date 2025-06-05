<script setup lang='ts'>
import type { ISpec } from '@henry/vhooks'
import { useThemeStore } from '@/stores/modules/theme'
import { useVChart } from '@henry/vhooks'
import { watch } from 'vue'

const themeStore = useThemeStore()

const spec: ISpec = {
  type: 'bar',
  data: [
    {
      id: 'barData',
      values: [
        { type: 'Autocracies', year: '1930', value: 129 },
        { type: 'Autocracies', year: '1940', value: 133 },
        { type: 'Autocracies', year: '1950', value: 130 },
        { type: 'Autocracies', year: '1960', value: 126 },
        { type: 'Autocracies', year: '1970', value: 117 },
        { type: 'Autocracies', year: '1980', value: 114 },
        { type: 'Autocracies', year: '1990', value: 111 },
        { type: 'Autocracies', year: '2000', value: 89 },
        { type: 'Autocracies', year: '2010', value: 80 },
        { type: 'Autocracies', year: '2018', value: 80 },
        { type: 'Democracies', year: '1930', value: 22 },
        { type: 'Democracies', year: '1940', value: 13 },
        { type: 'Democracies', year: '1950', value: 25 },
        { type: 'Democracies', year: '1960', value: 29 },
        { type: 'Democracies', year: '1970', value: 38 },
        { type: 'Democracies', year: '1980', value: 41 },
        { type: 'Democracies', year: '1990', value: 57 },
        { type: 'Democracies', year: '2000', value: 87 },
        { type: 'Democracies', year: '2010', value: 98 },
        { type: 'Democracies', year: '2018', value: 99 },
      ],
    },
  ],
  xField: ['year', 'type'],
  yField: 'value',
  seriesField: 'type',
  legends: {
    visible: true,
    orient: 'top',
    position: 'start',
  },
  animationAppear: {
    duration: 500,
    oneByOne: true,
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

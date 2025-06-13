<script setup lang='ts'>
import { dayjs, formatToDate } from '@henry/utils'
import calendar from 'js-calendar-converter'
import { ref } from 'vue'

const currentDate = ref(dayjs().valueOf())

const title = ref('')

function isDateDisabled(timestamp: number) {
  const isAfter = dayjs().isAfter(dayjs(timestamp))
  return isAfter
}

function getLunarDate(year: number, month: number, date: number) {
  const dd = calendar.solar2lunar(year, month, date)
  return `${dd.gzYear} ${dd.IMonthCn} ${dd.IDayCn} <br/>
    ${dd.Animal} ${dd.astro} <br/>
    ${dd.lunarFestival ? dd.lunarFestival : ''}
  `
}

function handleUpdateValue(_: number, { year, month, date }: { year: number, month: number, date: number }) {
  updateTitle(year, month, date)
}

function handlePanelChange({ year, month }: { year: number, month: number }) {
  updateTitle(year, month, new Date(currentDate.value).getDay())
}

function updateTitle(year: number, month: number, date: number) {
  const dd = calendar.solar2lunar(year, month, date)
  title.value = `${dd.gzYear} ${dd.IMonthCn} ${dd.IDayCn} ${dd.ncWeek} (${formatToDate(currentDate.value)})`
}

updateTitle(dayjs().year(), dayjs().month() + 1, dayjs().date())
</script>

<template>
  <div>
    <NCard title="日历" :bordered="false" class="card-wrapper h-full" content-class="overflow-hidden">
      <NCalendar
        v-model:value="currentDate"
        class="h-full"
        :is-date-disabled="isDateDisabled"
        @update:value="handleUpdateValue"
        @panel-change="handlePanelChange"
      >
        <template #header>
          <div class="text-base">
            {{ title }}
          </div>
        </template>
        <template #default="{ year, month, date }">
          <p v-html="getLunarDate(year, month, date)" />
        </template>
      </NCalendar>
    </NCard>
  </div>
</template>

<style scoped>

</style>

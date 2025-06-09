import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

function formatToDate(date: ConfigType, format = DATE_FORMAT): string {
  return dayjs(date).format(format)
}

function formatToDateTime(
  date: ConfigType,
  format = DATE_TIME_FORMAT,
): string {
  return dayjs(date).format(format)
}

export {
  dayjs,
  formatToDate,
  formatToDateTime,
}

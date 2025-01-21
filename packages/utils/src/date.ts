import type { ConfigType } from 'dayjs'
import dayjs from 'dayjs'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

export const dateUtil = dayjs

export function formatToDateTime(
  date: ConfigType,
  format = DATE_TIME_FORMAT,
): string {
  return dateUtil(date).format(format)
}

export function formatToDate(date: ConfigType, format = DATE_FORMAT): string {
  return dateUtil(date).format(format)
}

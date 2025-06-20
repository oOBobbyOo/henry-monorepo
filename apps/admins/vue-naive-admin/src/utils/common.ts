import { $t } from '@/locales'

/**
 * Transform record to option
 */
export function transformRecordToOption<T extends Record<string, string>>(record: T) {
  return Object.entries(record).map(([key, value]) => ({
    label: value,
    value: key,
  }))
}

/**
 * Translate options
 */
export function translateOptions<T extends Record<string, string>>(options: T[]) {
  return options.map(option => ({
    ...option,
    label: $t(option.label),
  }))
}

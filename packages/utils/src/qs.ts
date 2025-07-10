import type { ParseOptions, StringifyOptions } from 'query-string'
import queryString from 'query-string'

export function parse(query: string, options?: ParseOptions) {
  return queryString.parse(query, options)
}

export function stringify(object: Record<string, any>, options?: StringifyOptions) {
  return queryString.stringify(object, options)
}

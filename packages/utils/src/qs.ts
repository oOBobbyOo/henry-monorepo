import type { ParseOptions, StringifyOptions } from 'query-string'
import queryString from 'query-string'

export function parseQuery(query: string, options?: ParseOptions) {
  return queryString.parse(query, options)
}

export function stringifyQuery(object: Record<string, any>, options?: StringifyOptions) {
  return queryString.stringify(object, options)
}

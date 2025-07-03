import { useMediaQuery } from '../useMediaQuery'

export function usePreferredDark(initialState: boolean = false): boolean {
  return useMediaQuery('(prefers-color-scheme: dark)', initialState)
}

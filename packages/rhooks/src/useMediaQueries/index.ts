import { useMediaQuery } from '../useMediaQuery'

export function useMediaQueries(
  queries: string[],
  initialState: boolean[] = queries.map(() => false),
): boolean[] {
  return queries.map((q, i) =>
    useMediaQuery(q, initialState[i]),
  )
}

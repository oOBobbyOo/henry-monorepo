import { useOutletContext } from 'react-router-dom'

export function usePreviousRoute() {
  return useOutletContext()
}

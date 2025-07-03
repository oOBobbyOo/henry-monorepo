import { useCallback, useState } from 'react'

export function useBoolean(initValue = false) {
  const [bool, setBool] = useState(!!initValue)

  const setTrue = useCallback(() => setBool(true), [])
  const setFalse = useCallback(() => setBool(false), [])
  const toggle = useCallback(() => setBool(x => !x), [])

  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle,
  }
}

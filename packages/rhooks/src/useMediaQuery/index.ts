import { useSyncExternalStore } from 'react'

export function useMediaQuery(
  query: string,
  initialState: boolean = false,
): boolean {
  // 获取当前媒体查询匹配状态
  const getSnapshot = () => {
    if (typeof window === 'undefined' || !window.matchMedia) {
      return initialState
    }
    return window.matchMedia(query).matches
  }

  const subscribe = (callback: () => void) => {
    // 在非浏览器环境下直接返回空清理函数
    if (typeof window === 'undefined' || !window.matchMedia) {
      return () => { }
    }

    const mediaQueryList = window.matchMedia(query)

    mediaQueryList.addEventListener('change', callback)

    // 返回清理函数
    return () => mediaQueryList.removeEventListener('change', callback)
  }

  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => initialState,
  )
}

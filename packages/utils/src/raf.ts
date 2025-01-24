const _window = window as any

export const inBrowser = typeof window !== 'undefined'

export function raf() {
  if (typeof _window !== 'undefined') {
    return (
      _window.requestAnimationFrame
      || _window.webkitRequestAnimationFrame
      || function (callback: FrameRequestCallback) {
        _window.setTimeout(callback, 1000 / 60)
      }
    )
  }
  else {
    return function (callback: FrameRequestCallback) {
      setTimeout(callback, 1000 / 60)
    }
  }
}

export function cancelRaf(id: number) {
  if (inBrowser) {
    cancelAnimationFrame(id)
  }
  else {
    clearTimeout(id)
  }
}

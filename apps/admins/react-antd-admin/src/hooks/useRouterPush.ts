import type { RouterNavigateOptions, To } from 'react-router-dom'
import { stringifyQuery } from '@henry/utils'
import { useLocation, useNavigate } from 'react-router-dom'

export function useRouterPush() {
  const location = useLocation()
  const navigate = useNavigate()

  function push(path: To, query?: Record<string, any>, options?: RouterNavigateOptions) {
    const _path = query ? `${path}?${stringifyQuery(query)}` : path
    navigate(_path, options)
  }

  function back() {
    navigate(-1)
  }

  function forward() {
    navigate(1)
  }

  function go(delta: number) {
    navigate(delta)
  }

  function replace(path: To) {
    navigate(path, { replace: true })
  }

  function reload() {
    navigate(0)
  }

  function toHome() {
    navigate('/')
  }

  return {
    location,
    navigate,
    push,
    back,
    forward,
    go,
    replace,
    reload,
    toHome,
  }
}

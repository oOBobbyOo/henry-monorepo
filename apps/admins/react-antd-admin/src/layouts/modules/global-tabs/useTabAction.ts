import { useRouterPush } from '@/hooks/useRouterPush'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getRouteByPathName, getTabByRoute, isTabInTabs } from '@/stores/modules/tab/shared'
import { addTab, getActiveTabKey, getTabs, updateTab } from '@/stores/modules/tab/slice'
import { useEffect } from 'react'

function useTabAction() {
  const dispatch = useAppDispatch()

  const activeTabKey = useAppSelector(getActiveTabKey)
  const tabs = useAppSelector(getTabs)

  const { pathname } = useRouterPush()

  function _addTab(pathname: string) {
    const route = getRouteByPathName(pathname)
    const tab = getTabByRoute(route)
    if (!isTabInTabs(tab.routeKey, tabs)) {
      dispatch(addTab(tab))
    }
    else {
      dispatch(updateTab(tab))
    }
  }

  useEffect(() => {
    _addTab(pathname)
  }, [pathname])

  return {
    activeTabKey,
    tabs,
  }
}

export default useTabAction

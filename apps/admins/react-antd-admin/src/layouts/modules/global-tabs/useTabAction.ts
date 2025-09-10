import { useRouterPush } from '@/hooks/useRouterPush'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getRouteByPathName, getTabByRoute, isTabInTabs } from '@/stores/modules/tab/shared'
import { addTab, getActiveTabKey, getTabs, setActiveTabKey, setTabs, updateTab } from '@/stores/modules/tab/slice'
import { useEffect, useRef } from 'react'

function useTabAction() {
  const homePath = import.meta.env.VITE_ROUTE_HOME

  const isInit = useRef(false)

  const dispatch = useAppDispatch()

  const activeTabKey = useAppSelector(getActiveTabKey)
  const tabs = useAppSelector(getTabs)

  const { pathname } = useRouterPush()

  /**
   * 获取首页标签
   */
  function getHomeTab() {
    const route = getRouteByPathName(homePath)
    const tab = getTabByRoute(route)
    return tab
  }

  /**
   * 初始化标签列表
   */
  function _initTabs(tab: App.Global.Tab) {
    const isHomeTab = tab.routePath === homePath
    const homeTab = isHomeTab ? tab : getHomeTab()
    const initTabs = [homeTab]

    const existsInInit = isTabInTabs(tab.routeKey, initTabs)

    if (!existsInInit) {
      initTabs.push(tab)
    }
    // 更新
    _updateTabs(initTabs)
  }

  /**
   * 更新标签列表
   * @param newTabs
   */
  function _updateTabs(newTabs: App.Global.Tab[]) {
    dispatch(setTabs(newTabs))
  }

  /**
   * 添加标签页
   * @param pathname
   */
  function _addTab(pathname: string) {
    const route = getRouteByPathName(pathname)
    const tab = getTabByRoute(route)

    if (!isInit.current) {
      isInit.current = true
      // 初始化
      _initTabs(tab)
    }
    else if (!isTabInTabs(tab.routeKey, tabs)) {
      dispatch(addTab(tab))
    }
    else {
      dispatch(updateTab(tab))
    }

    dispatch(setActiveTabKey(tab.routeKey))
  }

  /**
   * 删除标签页
   * @param key
   */
  function removeTabBykey(key: string) {
    const excludes = tabs.filter(tab => tab.routeKey !== key)
    _updateTabs(excludes)
  }

  /**
   * 标签页是否保留
   * @param key
   */
  function isTabRetain(key: string) {
    const _fixedTabs = tabs.filter(tab => tab.routePath === homePath)
    return _fixedTabs.some(tab => tab.routeKey === key)
  }

  useEffect(() => {
    _addTab(pathname)
  }, [pathname])

  return {
    activeTabKey,
    tabs,
    removeTabBykey,
    isTabRetain,
  }
}

export default useTabAction

import { useRouterPush } from '@/hooks/useRouterPush'
import { useAppDispatch, useAppSelector } from '@/stores/hook'
import { getRouteByPathName, getTabByRoute, isTabInTabs } from '@/stores/modules/tab/shared'
import { addTab, getActiveTabKey, getTabs, setActiveTabKey, setTabs, updateTab } from '@/stores/modules/tab/slice'
import { useEffect, useRef } from 'react'

const homePath = import.meta.env.VITE_ROUTE_HOME

export function useUpdateTabs() {
  const dispatch = useAppDispatch()

  const { navigate } = useRouterPush()

  /**
   * 更新标签列表
   * @param newTabs
   */
  function updateTabs(newTabs: App.Global.Tab[]) {
    dispatch(setTabs(newTabs))
  }

  /**
   * 根据标签页切换路由
   * @param tab
   */
  async function switchRouteByTab(tab: App.Global.Tab) {
    navigate(tab.routePath)

    dispatch(setActiveTabKey(tab.routeKey))
  }

  return {
    updateTabs,
    switchRouteByTab,
  }
}

export function useTabAction() {
  const isInit = useRef(false)

  const dispatch = useAppDispatch()

  const activeTabKey = useAppSelector(getActiveTabKey)

  const tabs = useAppSelector(getTabs)

  const _fixedTabs = tabs.filter(tab => tab.routePath === homePath)

  const _tabKeys = tabs.map(tab => tab.routeKey)

  const { pathname } = useRouterPush()

  const { updateTabs, switchRouteByTab } = useUpdateTabs()

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
    updateTabs(initTabs)
  }

  /**
   * 初始化添加标签页
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
   * 删除当前标签页
   * @param key
   */
  function removeTabBykey(key: string) {
    const excludes = tabs.filter(tab => tab.routeKey !== key)

    if (key === activeTabKey) {
      const currentIndex = _tabKeys.findIndex(key => key === activeTabKey)

      const newActive = tabs[currentIndex + 1] || tabs[currentIndex - 1] || excludes.at(-1)

      if (newActive)
        switchRouteByTab(newActive)
    }

    updateTabs(excludes)
  }

  /**
   * 标签页是否保留
   * @param key
   */
  function isTabRetain(key: string) {
    return _fixedTabs.some(tab => tab.routeKey === key)
  }

  useEffect(() => {
    if (pathname === '/')
      return
    _addTab(pathname)
  }, [pathname])

  return {
    tabs,
    activeTabKey,
    removeTabBykey,
    isTabRetain,
  }
}

export function useTabControl() {
  const activeTabKey = useAppSelector(getActiveTabKey)

  const tabs = useAppSelector(getTabs)

  const _fixedTabs = tabs.filter(tab => tab.routePath === homePath)

  const _tabKeys = tabs.map(tab => tab.routeKey)

  const { updateTabs, switchRouteByTab } = useUpdateTabs()

  /**
   * 清除标签页
   * @param excludes
   */
  function clearTabs(excludes: string[] = []) {
    const remainTabKeys = [..._fixedTabs.map(tab => tab.routeKey), ...excludes]

    const updatedTabs: App.Global.Tab[] = []

    for (const tab of tabs) {
      if (remainTabKeys.includes(tab.routeKey)) {
        updatedTabs.push(tab)
      }
    }

    if (updatedTabs.length === tabs.length)
      return

    if (!remainTabKeys.includes(activeTabKey)) {
      const currentIndex = _tabKeys.findIndex(key => key === activeTabKey)

      const newActive = tabs[currentIndex + 1] || tabs[currentIndex - 1] || updatedTabs.at(-1)

      if (newActive)
        switchRouteByTab(newActive)
    }

    updateTabs(updatedTabs)
  }

  /**
   * 清除标当前签页
   * @param key
   */
  function clearCurrentTab(key: string) {
    const excludes = _tabKeys.filter(t => t !== key)
    clearTabs(excludes)
  }

  /**
   * 清除左侧标签页
   * @param key
   */
  function clearLeftTabs(key: string) {
    const index = _tabKeys.indexOf(key)

    if (index === -1)
      return

    const excludes = _tabKeys.slice(index)

    clearTabs(excludes)
  }

  /**
   * 清除右侧标签页
   * @param key
   */
  function clearRightTabs(key: string) {
    const index = _tabKeys.indexOf(key)

    if (index === -1)
      return

    const excludes = _tabKeys.slice(0, index + 1)

    clearTabs(excludes)
  }

  /**
   * 清除其他标签页
   * @param key
   */
  function clearOtherTabs(key: string) {
    const excludes = [key]
    clearTabs(excludes)
  }

  /**
   * 清除所有标签页(排除首页)
   */
  function clearAllTabs() {
    switchRouteByTab(_fixedTabs[0])
    updateTabs(_fixedTabs)
  }

  return {
    clearAllTabs,
    clearCurrentTab,
    clearLeftTabs,
    clearRightTabs,
    clearOtherTabs,
  }
}

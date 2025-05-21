import type { Route } from 'vue-router'
import { useRouterPush } from '@/hooks/useRouterPush'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getTabByRoute, isTabInTabs } from './shard'

export const useTabStore = defineStore('tab', () => {
  const { routerPush } = useRouterPush(false)

  /** Tabs */
  const tabs = ref<App.Global.Tab[]>([])

  /** Get active tab */
  const homeTab = ref<App.Global.Tab>()

  /** Active tab id */
  const activeTabId = ref<string>('Analysis')

  /**
   * Set active tab id
   * @param id Tab id
   */
  function setActiveTabId(id: string) {
    activeTabId.value = id
  }

  /**
   * Init tab store
   * @param currentRoute Current route
   */
  function initTabStore(currentRoute: Route) {
    addTab(currentRoute)
  }

  /**
   * Add tab
   * @param route Tab route
   * @param active Whether to activate the added tab
   */
  function addTab(route: Route, active = true) {
    const tab = getTabByRoute(route)

    if (!isTabInTabs(tab.id, tabs.value)) {
      tabs.value.push(tab)
    }
    if (active) {
      setActiveTabId(tab.id)
    }
  }

  /**
   * Remove tab
   * @param tabId Tab id
   */
  async function removeTab(tabId: string) {
    const removeTabIndex = tabs.value.findIndex(tab => tab.id === tabId)
    if (removeTabIndex === -1)
      return

    const isRemoveActiveTab = activeTabId.value === tabId
    const nextTab = tabs.value[removeTabIndex + 1] || homeTab.value

    tabs.value.splice(removeTabIndex, 1)

    if (isRemoveActiveTab && nextTab) {
      await switchRouteByTab(nextTab)
    }
  }

  /**
   * Switch route by tab
   * @param tab
   */
  async function switchRouteByTab(tab: App.Global.Tab) {
    const fail = await routerPush(tab.fullPath)
    if (!fail) {
      setActiveTabId(tab.id)
    }
  }

  return {
    tabs,
    activeTabId,
    initTabStore,
    addTab,
    removeTab,
    setActiveTabId,
    switchRouteByTab,
  }
})

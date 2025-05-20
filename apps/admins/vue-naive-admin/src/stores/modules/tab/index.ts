import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabStore = defineStore('tab', () => {
  /** Tabs */
  const tabs = ref<App.Global.Tab[]>([
    {
      id: 'Analysis',
      label: '分析页',
      icon: 'mdi:monitor-dashboard',
    },
    {
      id: 'Workbench',
      label: '工作台',
      icon: 'icon-park-outline:workbench',
    },
  ])

  /** Active tab id */
  const activeTabId = ref<string>('Analysis')

  /**
   * Set active tab id
   * @param id Tab id
   */
  function setActiveTabId(id: string) {
    activeTabId.value = id
  }

  function initTabStore() {}

  return {
    tabs,
    activeTabId,
    initTabStore,
    setActiveTabId,
  }
})

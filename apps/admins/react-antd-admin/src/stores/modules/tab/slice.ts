import type { PayloadAction } from '@reduxjs/toolkit'
import type { TabState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TabState = {
  /** Active tab key */
  activeTabKey: '',
  /** Tabs */
  tabs: [],
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTabKey: (state, { payload }: PayloadAction<TabState['activeTabKey']>) => {
      state.activeTabKey = payload
    },
    setTabs: (state, { payload }: PayloadAction<TabState['tabs']>) => {
      state.tabs = payload
    },
    addTab(state, { payload }: PayloadAction<App.Global.Tab>) {
      state.tabs.push(payload)
    },
    updateTab(state, { payload }: PayloadAction<App.Global.Tab>) {
      const index = state.tabs.findIndex(tab => tab.routeKey === payload.routeKey)
      state.tabs[index] = payload
    },
  },
  selectors: {
    getActiveTabKey: state => state.activeTabKey,
    getTabs: state => state.tabs,
  },
})

export const { setActiveTabKey, setTabs, addTab, updateTab } = tabSlice.actions

export const { getActiveTabKey, getTabs } = tabSlice.selectors

export default tabSlice.reducer

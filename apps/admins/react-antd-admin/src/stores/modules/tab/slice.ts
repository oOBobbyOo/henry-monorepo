import type { PayloadAction } from '@reduxjs/toolkit'
import type { TabState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: TabState = {
  /** Active tab id */
  activeTabId: '',
  /** Tabs */
  tabs: [],
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTabId: (state, { payload }: PayloadAction<TabState['activeTabId']>) => {
      state.activeTabId = payload
    },
    setTabs: (state, { payload }: PayloadAction<TabState['tabs']>) => {
      state.tabs = payload
    },
  },
  selectors: {
    getActiveTabId: tab => tab.activeTabId,
    getTabs: state => state.tabs,
  },
})

export const { setActiveTabId, setTabs } = tabSlice.actions

export const { getActiveTabId, getTabs } = tabSlice.selectors

export default tabSlice.reducer

import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AppState = {
  locale: 'zh-CN',
  siderCollapse: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetApp: () => initialState,
    setSiderCollapse: (state, action: PayloadAction<boolean>) => {
      state.siderCollapse = action.payload
    },
    toggleSiderCollapse: (state) => {
      state.siderCollapse = !state.siderCollapse
    },
  },
  selectors: {
    getSiderCollapse: app => app.siderCollapse,
  },
})

export const { setSiderCollapse, toggleSiderCollapse, resetApp } = appSlice.actions

export const { getSiderCollapse } = appSlice.selectors

export default appSlice.reducer

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
    setLocale: (state, action: PayloadAction<AppState['locale']>) => {
      state.locale = action.payload
    },
    setSiderCollapse: (state, action: PayloadAction<AppState['siderCollapse']>) => {
      state.siderCollapse = action.payload
    },
    toggleSiderCollapse: (state) => {
      state.siderCollapse = !state.siderCollapse
    },
  },
  selectors: {
    getLocale: app => app.locale,
    getSiderCollapse: app => app.siderCollapse,
  },
})

export const { setLocale, setSiderCollapse, toggleSiderCollapse, resetApp } = appSlice.actions

export const { getLocale, getSiderCollapse } = appSlice.selectors

export default appSlice.reducer

import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AppState = {
  locale: 'zh-CN',
  siderCollapse: false,
  themeDrawerVisible: false,
  reloadFlag: false,
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
    setThemeDrawerVisible: (state, action: PayloadAction<AppState['themeDrawerVisible']>) => {
      state.themeDrawerVisible = action.payload
    },
    toggleThemeDrawerVisible: (state) => {
      state.themeDrawerVisible = !state.themeDrawerVisible
    },
    setReloadFlag: (state, action: PayloadAction<boolean>) => {
      state.reloadFlag = action.payload
    },
  },
  selectors: {
    getLocale: app => app.locale,
    getSiderCollapse: app => app.siderCollapse,
    getThemeDrawerVisible: app => app.themeDrawerVisible,
    getReloadFlag: app => app.reloadFlag,
  },
})

export const { resetApp, setLocale, setSiderCollapse, toggleSiderCollapse, setThemeDrawerVisible, toggleThemeDrawerVisible, setReloadFlag } = appSlice.actions

export const { getLocale, getSiderCollapse, getThemeDrawerVisible, getReloadFlag } = appSlice.selectors

export default appSlice.reducer

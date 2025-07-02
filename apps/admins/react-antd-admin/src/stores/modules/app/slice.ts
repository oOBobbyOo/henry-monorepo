import type { AppState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AppState = {
  locale: 'zh-CN',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    resetApp: () => initialState,
  },
})

export const { resetApp } = appSlice.actions

export default appSlice.reducer

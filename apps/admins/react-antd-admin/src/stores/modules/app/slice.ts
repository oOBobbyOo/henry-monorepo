import type { AppState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AppState = {
  locale: 'zh-CN',
}

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => initialState,
  },
})

export const { resetAuth } = appSlice.actions

export default appSlice.reducer

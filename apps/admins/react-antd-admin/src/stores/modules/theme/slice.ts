import type { ThemeState } from './type'
import { createSlice } from '@reduxjs/toolkit'

import { initThemeSettings } from './shared'

const initialState: ThemeState = {
  settings: initThemeSettings(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    resetTheme: () => initialState,
  },
})

export const { resetTheme } = themeSlice.actions

export default themeSlice.reducer

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
  selectors: {
    getThemeSettings: theme => theme.settings,
  },
})

export const { resetTheme } = themeSlice.actions

export const { getThemeSettings } = themeSlice.selectors

export default themeSlice.reducer

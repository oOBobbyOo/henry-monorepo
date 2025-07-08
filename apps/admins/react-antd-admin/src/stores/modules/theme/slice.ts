import type { ThemeState } from './type'
import { createSlice } from '@reduxjs/toolkit'

import { initThemeSettings } from './shared'

const initialState: ThemeState = {
  settings: initThemeSettings(),
  darkMode: false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    resetTheme: () => initialState,
  },
  selectors: {
    getThemeSettings: theme => theme.settings,
    getDarkMode: theme => theme.darkMode,
  },
})

export const { resetTheme } = themeSlice.actions

export const { getThemeSettings, getDarkMode } = themeSlice.selectors

export default themeSlice.reducer

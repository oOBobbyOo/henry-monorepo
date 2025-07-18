import type { PayloadAction } from '@reduxjs/toolkit'
import type { ThemeState } from './type'
import { createSelector, createSlice } from '@reduxjs/toolkit'

import { initThemeSettings } from './shared'

const initialState: ThemeState = {
  settings: initThemeSettings(),
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    resetTheme: () => initialState,
    setThemeScheme: (state, { payload }: PayloadAction<Theme.ThemeScheme>) => {
      state.settings.themeScheme = payload
    },
    setGrayscale: (state, { payload }: PayloadAction<boolean>) => {
      state.settings.grayscale = payload
    },
    setColourWeakness: (state, { payload }: PayloadAction<boolean>) => {
      state.settings.colourWeakness = payload
    },
  },
  selectors: {
    getThemeSettings: theme => theme.settings,
  },
})

export const { resetTheme, setThemeScheme, setGrayscale, setColourWeakness } = themeSlice.actions

export const { getThemeSettings } = themeSlice.selectors

export default themeSlice.reducer

// 计算属性选择器
export const themeColors = createSelector([getThemeSettings], ({ isInfoFollowPrimary, otherColor, themeColor }) => {
  const colors: Theme.ThemeColor = {
    primary: themeColor,
    ...otherColor,
    info: isInfoFollowPrimary ? themeColor : otherColor.info,
  }
  return colors
})

export const settingsJson = createSelector([getThemeSettings], (settings) => {
  return JSON.stringify(settings)
})

import type { Reducer, UnknownAction } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'

export interface RootState {
  app: import('./modules/app/type').AppState
  auth: import('./modules/auth/type').AuthState
  tab: import('./modules/tab/type').TabState
  theme: import('./modules/theme/type').ThemeState
  user: import('./modules/user/type').UserState
}

// 批量导入 ./modules 下所有 slice.ts 文件
const sliceModules = import.meta.glob('./modules/*/slice.ts', { eager: true })

const reducers = Object.entries(sliceModules)
  .reduce((acc, [key, value]) => {
    const sliceName = key.replace('./modules/', '').replace('/slice.ts', '')
    acc[sliceName] = (value as { default: Reducer<RootState[keyof RootState], UnknownAction> }).default
    return acc
  }, {} as Record<string, Reducer<RootState[keyof RootState], UnknownAction>>)

const rootReducer = combineReducers(reducers)

export default rootReducer

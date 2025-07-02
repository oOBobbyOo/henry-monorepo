import type { Reducer } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'

// 批量导入 ./modules 下所有 slice.ts 文件
const modules: Record<string, { default: Reducer }> = import.meta.glob('./modules/*/slice.ts', { eager: true })

const reducers = Object.keys(modules).reduce((acc, path) => {
  const key = path.split('/')[2]
  const reducer = modules[path].default
  acc[key] = reducer
  return acc
}, {} as Record<string, Reducer>)

const rootReducer = combineReducers(reducers)

export default rootReducer

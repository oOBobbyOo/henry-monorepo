import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const { VITE_REDUX_DEVTOOLS_ENABLE } = import.meta.env

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // 可选：关闭序列化检查（如果需要非序列化状态）
    }),
  devTools: VITE_REDUX_DEVTOOLS_ENABLE,
})

export default store

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch

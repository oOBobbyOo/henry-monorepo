import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch } from './index'
import type { RootState } from './rootReducer'
import { useDispatch, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()

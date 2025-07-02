import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, RootState } from './index'
import { useDispatch, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()

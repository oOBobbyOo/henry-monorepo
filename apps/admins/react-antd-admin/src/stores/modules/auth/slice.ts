import type { PayloadAction } from '@reduxjs/toolkit'
import type { AuthState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: AuthState = {
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => initialState,
    setToken: (state, { payload }: PayloadAction<AuthState['token']>) => {
      state.token = payload
    },
  },
})

export const { resetAuth, setToken } = authSlice.actions

export default authSlice.reducer

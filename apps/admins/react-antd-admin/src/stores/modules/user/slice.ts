import type { UserState } from './type'
import { createSlice } from '@reduxjs/toolkit'

const initialState: UserState = {
  userInfo: {
    userId: '',
    userName: 'Henry',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: () => initialState,
    setUserInfo: (state, { payload }) => {
      state.userInfo = payload
    },
  },
  selectors: {
    getUserInfo: user => user.userInfo,
  },
})

export const { setUserInfo, resetUser } = userSlice.actions

export const { getUserInfo } = userSlice.selectors

export default userSlice.reducer

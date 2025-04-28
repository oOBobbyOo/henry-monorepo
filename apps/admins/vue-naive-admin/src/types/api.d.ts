declare namespace Api {
  interface LoginToken {
    token: string
    refreshToken: string
  }

  interface UserInfo {
    userId: string
    userName: string
    avatar?: string
  }
}

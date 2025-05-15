import { getUserInfo } from '@/api/user'
import { getToken } from '@/utils'
import { to } from '@henry/utils'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  let userInfo: Api.UserInfo = reactive({
    userId: '',
    userName: '',
    avatar: '',
  })

  async function initUserInfo() {
    const hasToken = getToken()

    if (hasToken) {
      const [error, data] = await to(getUserInfo())

      if (!error) {
        userInfo = data
      }
    }
  }

  return {
    userInfo,
    initUserInfo,
  }
})

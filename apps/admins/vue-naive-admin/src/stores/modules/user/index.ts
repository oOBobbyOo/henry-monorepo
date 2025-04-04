import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive({
    userId: '',
    userName: '',
    avatar: '',
  })

  return {
    userInfo,
  }
})

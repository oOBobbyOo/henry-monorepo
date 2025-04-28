import { loginByPhone, loginByUser, registerUser, resetPassword } from '@/api/auth'
import { getUserInfo } from '@/api/user'
import { $t } from '@/locales'
import { useUserStore } from '@/stores/modules/user'
import { to } from '@henry/utils'
import { useLoading } from '@henry/vhooks'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const { loading: loginLoading, startLoading, endLoading } = useLoading()

  const userStore = useUserStore()

  const token = ref('')

  async function pwdLogin({ username, password }: Auth.PwdLogin.FormModel) {
    startLoading()

    const [error, loginToken] = await to(loginByUser({ username, password }))

    if (!error) {
      const pass = await loginByToken(loginToken)

      if (pass) {
        window.$notification?.success({
          title: $t('page.login.common.loginSuccess'),
          content: $t('page.login.common.welcomeBack', { userName: username }),
          duration: 4500,
        })
      }
    }

    endLoading()
  }

  async function codeLogin({ phone, code }: Auth.CodeLogin.FormModel) {
    startLoading()

    const [error, loginToken] = await to(loginByPhone({ phone, code }))

    if (!error) {
      const pass = await loginByToken(loginToken)

      if (pass) {
        window.$notification?.success({
          title: $t('page.login.common.loginSuccess'),
          content: $t('page.login.common.welcomeBack', { userName: phone }),
          duration: 4500,
        })
      }
    }

    endLoading()
  }

  async function loginByToken(loginToken: Api.LoginToken) {
    const [error, userInfo] = await to(getUserInfo())

    if (!error) {
      token.value = loginToken.token
      userStore.userInfo = userInfo
      return true
    }

    return false
  }

  async function register({ phone, code, password }: Omit<Auth.Register.FormModel, 'confirmPassword'>) {
    startLoading()

    const [error] = await to(registerUser({ phone, code, password }))

    if (!error) {
      window.$message?.success($t('page.login.common.validateSuccess'))
    }

    endLoading()
  }

  async function resetPwd({ phone, code, password }: Omit<Auth.ResetPwd.FormModel, 'confirmPassword'>) {
    startLoading()

    const [error] = await to(resetPassword({ phone, code, password }))

    if (!error) {
      window.$message?.success($t('page.login.common.validateSuccess'))
    }

    endLoading()
  }

  return {
    loginLoading,
    pwdLogin,
    codeLogin,
    register,
    resetPwd,
  }
})

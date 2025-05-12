import { request } from '@/utils'

export function loginByUser({ username, password }: Auth.PwdLogin.FormModel) {
  return request.post<Api.LoginToken>('/api/loginByUser', {
    username,
    password,
  })
}

export function loginByPhone({ phone, code }: Auth.CodeLogin.FormModel) {
  return request.post<Api.LoginToken>('/api/loginByPhone', {
    phone,
    code,
  })
}

export function getCaptcha({ phone }: Auth.CodeLogin.FormModel) {
  return request.post<Api.LoginToken>('/api/getCaptcha', {
    phone,
  })
}

export function registerUser({ phone, code, password }: Omit<Auth.Register.FormModel, 'confirmPassword'>) {
  return request.post('/api/registerUser', {
    phone,
    code,
    password,
  })
}

export function resetPassword({ phone, code, password }: Omit<Auth.ResetPwd.FormModel, 'confirmPassword'>) {
  return request.post('/api/resetPassword', {
    phone,
    code,
    password,
  })
}

export function logout() {
  return request.post('/api/logout')
}

import request from '@henry/request'

export function loginByUser({ username, password }: Auth.PwdLogin.FormModel) {
  return request.post('/api/loginByUser', {
    username,
    password,
  })
}

export function loginByPhone({ phone, code }: Auth.CodeLogin.FormModel) {
  return request.post('/api/loginByPhone', {
    phone,
    code,
  })
}

export function register({ phone, code, password }: Auth.Register.FormModel) {
  return request.post('/api/loginByCode', {
    phone,
    code,
    password,
  })
}

export function resetPwd({ phone, code, password }: Auth.ResetPwd.FormModel) {
  return request.post('/api/resetPwd', {
    phone,
    code,
    password,
  })
}

export function logout() {
  return request.post('/api/logout')
}

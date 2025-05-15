import { localStg } from './storage'

export function getToken() {
  return localStg.get('TOKEN') || ''
}

export function setToken(token: string, refreshToken: string) {
  localStg.set('TOKEN', token)
  localStg.set('REFRESH_TOKEN', refreshToken)
}

export function clearToken() {
  localStg.remove('TOKEN')
  localStg.remove('REFRESH_TOKEN')
}

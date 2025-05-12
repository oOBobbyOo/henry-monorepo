import { request } from '@/utils'

export function getUserInfo() {
  return request.get<Api.UserInfo>('/api/getUserInfo')
}

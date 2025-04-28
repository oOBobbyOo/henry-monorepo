import request from '@henry/request'

export function getUserInfo() {
  return request.get<Api.UserInfo>('/api/getUserInfo')
}

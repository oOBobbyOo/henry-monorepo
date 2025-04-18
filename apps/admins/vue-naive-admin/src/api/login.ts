import request from '@henry/request'

export function getUser() {
  return request.get('/api/user')
}

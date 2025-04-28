import type { MockMethod } from 'vite-plugin-mock'
import { requestSuccess } from './_utils'

export default [
  {
    url: '/api/loginByUser',
    method: 'post',
    response: () => {
      return requestSuccess({
        token: '123456',
        accessToken: '123456',
      })
    },
  },
  {
    url: '/api/loginByPhone',
    method: 'post',
    response: () => {
      return requestSuccess({
        token: '123456',
        accessToken: '123456',
      })
    },
  },
  {
    url: '/api/getCaptcha',
    method: 'post',
    response: () => {
      return requestSuccess({})
    },
  },
  {
    url: '/api/registerUser',
    method: 'post',
    response: () => {
      return requestSuccess({})
    },
  },
  {
    url: '/api/resetPassword',
    method: 'post',
    response: () => {
      return requestSuccess({})
    },
  },
  {
    url: '/api/logout',
    method: 'post',
    response: () => {
      return requestSuccess({})
    },
  },
] as MockMethod[]

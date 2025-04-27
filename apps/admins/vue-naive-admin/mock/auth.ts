import type { MockMethod } from 'vite-plugin-mock'
import { requestSuccess } from './_utils'

export default [
  {
    url: '/api/loginByUser',
    method: 'post',
    response: () => {
      return requestSuccess({})
    },
  },
  {
    url: '/api/loginByPhone',
    method: 'post',
    response: () => {
      return requestSuccess({})
    },
  },
  {
    url: '/api/register',
    method: 'post',
    response: () => {
      return requestSuccess({})
    },
  },
  {
    url: '/api/resetPwd',
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

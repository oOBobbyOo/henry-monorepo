import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { requestSuccess } from './_utils'

const loginToken = Mock.mock({
  token: '123456',
  refreshToken: '123456',
})

export default defineFakeRoute([
  {
    url: '/api/loginByUser',
    method: 'post',
    response: () => {
      return requestSuccess(loginToken)
    },
  },
  {
    url: '/api/loginByPhone',
    method: 'post',
    response: () => {
      return requestSuccess(loginToken)
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
])

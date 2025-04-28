import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import { requestSuccess } from './_utils'

const userData = Mock.mock({
  uid: '@id()',
  realName: '@cname()',
  avatar: 'https://api.multiavatar.com/@name().png',
  email: '@email()',
  address: '@county(true)',
  tags: [
    {
      key: '@guid()',
      label: '腹黑',
    },
    {
      key: '@guid()',
      label: '幽默',
    },
    {
      key: '@guid()',
      label: '帅气',
    },
  ],
})

export default defineFakeRoute([
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return requestSuccess(userData)
    },
  },
])

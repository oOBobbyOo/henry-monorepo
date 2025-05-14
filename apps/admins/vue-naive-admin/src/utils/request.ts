import { HttpClient } from '@henry/request'
import pkg from '~/package.json'
import { localStg } from './storage'

const baseURL = import.meta.env.VITE_BASE_API

export const request = new HttpClient({
  baseURL,
  timeout: 6000,
  withCredentials: true,
  headers: {
    'App-Version': pkg.version,
  },
  cacheEnabled: true,
  cacheTTL: 30000,
})

request.addRequestInterceptor((config) => {
  const token = localStg.get('TOKEN')
  if (token) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    else {
      config.headers = { Authorization: `Bearer ${token}` } as any
    }
  }
  return config
})

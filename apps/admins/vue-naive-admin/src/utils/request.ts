import { HttpClient } from '@henry/request'

const baseURL = import.meta.env.VITE_BASE_API

export const request = new HttpClient({
  baseURL,
  timeout: 6000,
  withCredentials: true,
  cacheEnabled: true,
  cacheTTL: 30000,
})

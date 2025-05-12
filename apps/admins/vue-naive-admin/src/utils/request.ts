import { HttpClient } from '@henry/request'

const baseURL = import.meta.env.VITE_BASE_API

export const request = new HttpClient({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  cache: true,
  cacheTTL: 30000,
})

import HttpClient from './HttpClient'

const baseURL = import.meta.env.VITE_API_URL

const request = new HttpClient({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  cache: true,
  cacheTTL: 30000,
})

export default request

import HttpClient from './HttpClient'

const url = import.meta.env.VITE_API_URL

const request = new HttpClient(url)

export default request

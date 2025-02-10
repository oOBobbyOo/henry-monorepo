import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'

interface RequestConfig extends AxiosRequestConfig {
  cache?: boolean
  cacheTTL?: number
  useAbortController?: boolean
}

type RequestInterceptor = (
  config: AxiosRequestConfig,
) => AxiosRequestConfig | Promise<AxiosRequestConfig>
type ResponseInterceptor = (
  response: AxiosResponse,
) => AxiosResponse | Promise<AxiosResponse>
type ErrorInterceptor = (error: AxiosError) => Promise<AxiosError>

class HttpClient {
  private instance: AxiosInstance
  private requestInterceptors: RequestInterceptor[] = []
  private responseInterceptors: ResponseInterceptor[] = []
  private errorInterceptors: ErrorInterceptor[] = []
  private abortControllers: Map<string, AbortController> = new Map()
  private cache: Map<string, AxiosResponse> = new Map()

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.instance = axios.create({
      baseURL,
      headers: defaultHeaders,
    })
    this.initializeInterceptors()
  }

  private initializeInterceptors(): void {
    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = this.getToken()
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: AxiosError) => {
        // 统一错误处理
        this.errorInterceptors.forEach((interceptor: ErrorInterceptor) =>
          interceptor(error),
        )
        return Promise.reject(error)
      },
    )
  }

  private getToken(): string {
    return localStorage.getItem('token') || ''
  }

  // 生成请求唯一标识
  private generateRequestKey(config: RequestConfig): string {
    return [
      config.method,
      config.url,
      JSON.stringify(config.params),
      JSON.stringify(config.data),
    ].join('|')
  }

  private getAbortController(key: string): AbortController {
    if (this.abortControllers.has(key)) {
      this.abortControllers.get(key)?.abort()
    }
    const controller = new AbortController()
    this.abortControllers.set(key, controller)
    return controller
  }

  // 添加请求拦截器
  addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor)
  }

  // 添加响应拦截器
  addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor)
  }

  // 添加错误拦截器
  addErrorInterceptor(interceptor: ErrorInterceptor): void {
    this.errorInterceptors.push(interceptor)
  }

  // 发送请求
  private async request<T>(
    config: AxiosRequestConfig,
    useCache: boolean = false,
  ): Promise<T> {
    const requestKey = this.generateRequestKey(config)
    // 取消重复请求
    const abortController = this.getAbortController(requestKey)

    // 检查缓存
    if (useCache && this.cache.has(requestKey)) {
      return this.cache.get(requestKey)?.data as T
    }

    try {
      // 应用实例请求拦截器
      for (const interceptor of this.requestInterceptors) {
        config = await interceptor(config)
      }

      const response = await this.instance.request<T>({
        ...config,
        signal: abortController.signal,
      })

      // 应用实例响应拦截器
      for (const interceptor of this.responseInterceptors) {
        response.data = (await interceptor(response)) as T
      }

      // 缓存响应
      if (useCache) {
        this.cache.set(requestKey, response)
      }

      return response.data
    }
    catch (error) {
      return Promise.reject(error)
    }
    finally {
      this.abortControllers.delete(requestKey)
    }
  }

  // GET 请求
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'GET', url, ...config })
  }

  // POST 请求
  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>({ method: 'POST', url, data, ...config })
  }

  // PUT 请求
  async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>({ method: 'PUT', url, data, ...config })
  }

  // PATCH 请求
  async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>({ method: 'PATCH', url, data, ...config })
  }

  // DELETE 请求
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ method: 'DELETE', url, ...config })
  }

  // 文件下载
  async download(url: string, config?: AxiosRequestConfig): Promise<Blob> {
    const response = await this.request<Blob>({
      method: 'GET',
      url,
      responseType: 'blob',
      ...config,
    })
    return response
  }

  // 文件上传
  async upload<T>(
    url: string,
    data: FormData,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>({ method: 'POST', url, data, ...config })
  }
}

export default HttpClient

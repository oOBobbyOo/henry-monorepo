import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'

// 定义拦截器类型
type RequestInterceptor = (
  config: InternalAxiosRequestConfig
) => InternalAxiosRequestConfig
type ResponseInterceptor = (response: AxiosResponse) => AxiosResponse
type ErrorInterceptor = (error: AxiosError) => Promise<AxiosError>

// 定义缓存项接口
interface CacheItem<T = any> {
  data: T
  expireTime: number
}

// HttpClient 配置接口
interface HttpClientConfig extends AxiosRequestConfig {
  cache?: boolean
  cacheTTL?: number
  headers?: Record<string, string>
}

export class HttpClient {
  private instance: AxiosInstance
  private requestInterceptors: RequestInterceptor[] = []
  private responseInterceptors: ResponseInterceptor[] = []
  private errorInterceptors: ErrorInterceptor[] = []
  private abortControllers: Map<string, AbortController> = new Map()
  private cache: Map<string, CacheItem> = new Map()

  constructor(private config: HttpClientConfig = {}) {
    this.instance = axios.create(config)
    this.setupGlobalInterceptors()
  }

  // 设置全局拦截器
  private setupGlobalInterceptors(): void {
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
        if (response.data?.code === 200)
          return response.data
        return Promise.reject(response.data)
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

  // 获取 token
  private getToken(): string {
    return localStorage.getItem('token') || ''
  }

  // 生成请求唯一标识
  private generateRequestKey(config: HttpClientConfig): string {
    const { method, url, params, data } = config
    return [method, url, JSON.stringify(params), JSON.stringify(data)].join(
      '&',
    )
  }

  // 获取 AbortController 实例
  private getAbortController(key: string): AbortController {
    if (this.abortControllers.has(key)) {
      this.abortControllers.get(key)?.abort()
    }
    const controller = new AbortController()
    this.abortControllers.set(key, controller)
    return controller
  }

  // 添加请求拦截器
  public addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor)
  }

  // 添加响应拦截器
  public addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor)
  }

  // 添加错误拦截器
  public addErrorInterceptor(interceptor: ErrorInterceptor): void {
    this.errorInterceptors.push(interceptor)
  }

  // 发送请求
  public async request<T>(config: HttpClientConfig): Promise<T> {
    const requestKey = this.generateRequestKey(config)
    const cacheEnabled = config.cache ?? this.config.cache

    // 处理缓存
    if (config.method?.toLowerCase() === 'get' && cacheEnabled) {
      const cacheItem = this.cache.get(requestKey)
      if (cacheItem && cacheItem.expireTime > Date.now()) {
        return Promise.resolve(cacheItem.data as T)
      }
    }

    // 取消重复请求
    const controller = this.getAbortController(requestKey)

    try {
      // 应用实例请求拦截器
      for (const interceptor of this.requestInterceptors) {
        config = await interceptor(config as InternalAxiosRequestConfig)
      }

      const response = await this.instance.request<T>({
        ...config,
        signal: controller.signal,
      })

      // 应用实例响应拦截器
      for (const interceptor of this.responseInterceptors) {
        response.data = (await interceptor(response)) as T
      }

      // 缓存处理
      if (config.method?.toLowerCase() === 'get' && cacheEnabled) {
        const ttl = config.cacheTTL ?? this.config.cacheTTL ?? 60000
        this.cache.set(requestKey, {
          data: response,
          expireTime: Date.now() + ttl,
        })
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
  public async get<T>(url: string, config?: HttpClientConfig): Promise<T> {
    return this.request<T>({ ...config, url, method: 'GET' })
  }

  // POST 请求
  public async post<T>(
    url: string,
    data?: any,
    config?: HttpClientConfig,
  ): Promise<T> {
    return this.request<T>({ ...config, url, data, method: 'POST' })
  }

  // PUT 请求
  public async put<T>(
    url: string,
    data?: any,
    config?: HttpClientConfig,
  ): Promise<T> {
    return this.request<T>({ ...config, url, data, method: 'PUT' })
  }

  // PATCH 请求
  public async patch<T>(
    url: string,
    data?: any,
    config?: HttpClientConfig,
  ): Promise<T> {
    return this.request<T>({ ...config, url, data, method: 'PATCH' })
  }

  // DELETE 请求
  public async delete<T>(url: string, config?: HttpClientConfig): Promise<T> {
    return this.request<T>({ ...config, url, method: 'DELETE' })
  }

  // 文件下载
  public async download(url: string, config?: HttpClientConfig): Promise<Blob> {
    return this.request<Blob>({
      ...config,
      url,
      responseType: 'blob',
      method: 'GET',
      headers: { 'Content-Type': 'application/octet-stream' },
    })
  }

  // 文件上传
  public async upload<T>(
    url: string,
    file: File,
    config?: HttpClientConfig,
  ): Promise<T> {
    const formData = new FormData()
    formData.append('file', file)
    return this.request<T>({
      ...config,
      url,
      data: formData,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  }
}

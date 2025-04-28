import localforage from 'localforage'

interface StorageItem<T> {
  value: T
  expires?: number
}

interface StorageConfig {
  driver?: 'local' | 'indexedDB' | 'webSQL'
  storagePrefix?: string
  defaultTTL?: number
}

export class EnhancedStorage {
  private driverMap = {
    local: localforage.LOCALSTORAGE,
    indexedDB: localforage.INDEXEDDB,
    webSQL: localforage.WEBSQL,
  } as const

  private instance: LocalForage
  private prefix: string
  private defaultTTL: number

  constructor(config: StorageConfig = {}) {
    this.prefix = config.storagePrefix || ''
    this.defaultTTL = config.defaultTTL || 24 * 60 * 60 * 1000 // 默认1天

    // 创建存储实例
    this.instance = localforage.createInstance({
      driver: [this.driverMap[config.driver || 'indexedDB']],
      name: `${this.prefix}DB`,
      storeName: `${this.prefix}Store`,
    })
  }

  private generateKey(key: string): string {
    return `${this.prefix}${key}`
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const storageKey = this.generateKey(key)
    const expires = Date.now() + (ttl || this.defaultTTL)
    await this.instance.setItem(storageKey, { value, expires })
  }

  async get<T>(key: string): Promise<T | null> {
    const storageKey = this.generateKey(key)
    const item = await this.instance.getItem<StorageItem<T>>(storageKey)

    if (!item || Date.now() > (item.expires || 0)) {
      await this.remove(key)
      return null
    }
    return item.value
  }

  async remove(key: string): Promise<void> {
    const storageKey = this.generateKey(key)
    await this.instance.removeItem(storageKey)
  }

  async clear(): Promise<void> {
    const keys = await this.instance.keys()
    keys.forEach(async (k: string) => {
      if (k.startsWith(this.prefix)) {
        await this.instance.removeItem(k)
      }
    })
  }

  // 批量操作扩展
  batchSet(items: Array<{ key: string, value: any, ttl?: number }>): Promise<void[]> {
    return Promise.all(items.map(({ key, value, ttl }) => this.set(key, value, ttl)))
  }

  // 自动清理过期项
  async autoPurge(): Promise<string[]> {
    const expiredKeys: string[] = []
    const keys = await this.instance.keys()

    await Promise.all(keys.map(async (k: string) => {
      const item = await this.instance.getItem<StorageItem<unknown>>(k)
      if (item && Date.now() > item.expires!) {
        expiredKeys.push(k.replace(this.prefix, ''))
        await this.instance.removeItem(k)
      }
    }))

    return expiredKeys
  }
}

export function createStorage(config: StorageConfig = {}): EnhancedStorage {
  return new EnhancedStorage(config)
}

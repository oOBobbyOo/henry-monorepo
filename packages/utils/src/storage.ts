import localforage from 'localforage'

interface StorageItem<T> {
  value: T
  expires?: number
}

interface StorageConfig {
  type?: 'local' | 'session'
  storagePrefix?: string
  defaultTTL?: number
}

interface EnhancedStorageConfig {
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

  constructor(config: EnhancedStorageConfig = {}) {
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

export class Storage {
  private prefix: string
  private storage: any
  private defaultTTL: number

  constructor(config: StorageConfig = {
    type: 'local',
    storagePrefix: '',
  }) {
    this.prefix = config.storagePrefix || ''
    this.storage = config.type === 'local' ? localStorage : sessionStorage
    this.defaultTTL = config.defaultTTL || 24 * 60 * 60 * 1000 // 默认1天
  }

  private getKey(key: string): string {
    return `${this.prefix}${key}`
  }

  set(key: string, value: any, ttl?: number) {
    const storageKey = this.getKey(key)
    const expires = Date.now() + (ttl || this.defaultTTL)
    const item = {
      value,
      expires,
    }
    this.storage.setItem(storageKey, JSON.stringify(item))
  }

  get(key: string) {
    const storageKey = this.getKey(key)
    const itemStr = this.storage.getItem(storageKey)
    if (!itemStr)
      return null
    try {
      const item = JSON.parse(itemStr)
      if (item.expires && Date.now() > item.expires) {
        this.remove(key)
        return null
      }
      return item.value
    }
    catch {
      this.remove(key)
      return null
    }
  }

  remove(key: string) {
    this.storage.removeItem(this.getKey(key))
  }

  clear() {
    Object.keys(this.storage)
      .filter(k => k.startsWith(this.prefix))
      .forEach(k => this.storage.removeItem(k))
  }
}

export function createLocalforage(config: EnhancedStorageConfig = { driver: 'local' }) {
  return new EnhancedStorage(config)
}

export function createStorage(config: StorageConfig = { type: 'local' }) {
  return new Storage(config)
}

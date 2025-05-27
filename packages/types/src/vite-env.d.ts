/// <reference types="vite/client" />

export interface ImportMetaEnv {
  /** The base url of the application */
  readonly VITE_BASE_URL: string
  /** The title of the application */
  readonly VITE_APP_TITLE: string
  /** The router history mode */
  readonly VITE_ROUTER_HISTORY_MODE?: 'web' | 'hash' | 'memory'
  /** The mock enable for prod */
  readonly VITE_MOCK_ENABLE: boolean
  /** The prefix of the storage key */
  readonly VITE_STORAGE_PREFIX: string
  /** The prefix of the iconify icon */
  readonly VITE_ICON_PREFIX: string
  /** The prefix of the local icon */
  readonly VITE_ICON_LOCAL_PREFIX: string
  /** The app env mode */
  readonly VITE_APP_ENV: string
  /** The base api for request */
  readonly VITE_BASE_API: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

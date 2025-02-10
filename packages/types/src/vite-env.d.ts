/// <reference types="vite/client" />

export interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_URL: string
  // 更多环境变量...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

import type { ImportMetaEnv } from '@henry/types'

import { createLocalforage, createStorage } from '@henry/utils'

const { VITE_STORAGE_PREFIX: storagePrefix } = import.meta.env.VITE_STORAGE_PREFIX as unknown as ImportMetaEnv

export const localStg = createStorage({
  type: 'local',
  storagePrefix,
})

export const sessionStg = createStorage({
  type: 'session',
  storagePrefix,
})

export const localforage = createLocalforage({
  driver: 'local',
  storagePrefix,
})

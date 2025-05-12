import { createLocalforage, createStorage } from '@henry/utils'

const storagePrefix = import.meta.env.VITE_STORAGE_PREFIX || ''

export const localStg = createStorage({
  type: 'local',
  storagePrefix,
},
)

export const sessionStg = createStorage({
  type: 'session',
  storagePrefix,
})

export const localforage = createLocalforage({
  driver: 'local',
  storagePrefix,
})

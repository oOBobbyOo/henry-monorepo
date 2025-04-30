import { createLocalforage } from '@henry/utils'

const storagePrefix = import.meta.env.VITE_STORAGE_PREFIX

export const localforage = createLocalforage({
  driver: 'local',
  storagePrefix,
})

import { PersistConfig } from 'redux-persist'
import { createNoopStorage } from '@/shared/lib/create-noop-storage'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('session')
    : createNoopStorage()

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: storage,
  whitelist: ['speller'],
}

export { persistConfig }

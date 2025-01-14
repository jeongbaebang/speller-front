import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
  PersistConfig,
} from 'redux-persist'
import { createNoopStorage } from '@/shared/lib/create-noop-storage'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import { rootReducer } from './reducers'

declare global {
  type AppDispatch = typeof store.dispatch
  type RootState = ReturnType<typeof rootReducer>
}

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('session')
    : createNoopStorage()

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: storage,
  whitelist: ['speller'],
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor }

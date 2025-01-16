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
} from 'redux-persist'

import { rootReducer } from './reducers'
import { persistConfig } from './persist-config'

declare global {
  type AppDispatch = typeof store.dispatch
  type RootState = ReturnType<typeof rootReducer>
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

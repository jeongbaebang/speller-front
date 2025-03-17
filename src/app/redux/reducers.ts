import { spellerReducer } from '@/entities/speller'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  speller: spellerReducer,
})

export { rootReducer }

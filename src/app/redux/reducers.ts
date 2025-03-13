import { flagReducer } from '@/entities/flag'
import { spellerReducer } from '@/entities/speller'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  flag: flagReducer,
  speller: spellerReducer,
})

export { rootReducer }

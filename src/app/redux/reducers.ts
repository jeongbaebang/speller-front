import { reportReducer } from '@/entities/report/model/report-slice'
import { spellerReducer } from '@/entities/speller'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  speller: spellerReducer,
  report: reportReducer,
})

export { rootReducer }

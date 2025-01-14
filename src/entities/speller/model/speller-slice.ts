'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { CheckResponse } from './api-interface'

type Response = CheckResponse & { requestedWithStrictMode: boolean }

interface SpellerState {
  text: string
  isStrictCheck: boolean
  response: Response
}

const initialState: SpellerState = {
  text: '',
  isStrictCheck: false,
  response: {
    str: '',
    errInfo: [],
    totalPageCnt: 0,
    remaningText: '',
    requestedWithStrictMode: false,
  },
}

const spellerSlice = createSlice({
  name: 'speller',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
    setStrickCheck: (state, action: PayloadAction<boolean>) => {
      state.isStrictCheck = action.payload
    },
    updateResponse: (state, action: PayloadAction<Response>) => {
      state.response = action.payload
    },
  },
})

const { setText, setStrickCheck, updateResponse } = spellerSlice.actions
const spellerReducer = spellerSlice.reducer

export {
  setText,
  setStrickCheck,
  updateResponse,
  spellerReducer,
  type SpellerState,
}

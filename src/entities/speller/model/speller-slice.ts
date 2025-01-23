'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { CheckResponse } from './api-interface'

type Response = CheckResponse & { requestedWithStrictMode: boolean }

interface SpellerState {
  text: string
  response: Response
  selectedErrIdx: number
}

const initialState: SpellerState = {
  text: '',
  response: {
    str: '',
    errInfo: [],
    totalPageCnt: 0,
    remaningText: '',
    requestedWithStrictMode: false,
  },
  selectedErrIdx: -1,
}

const spellerSlice = createSlice({
  name: 'speller',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },

    updateResponse: (state, action: PayloadAction<Response>) => {
      state.response = action.payload
    },

    setSelectedErrIdx: (state, action: PayloadAction<number>) => {
      state.selectedErrIdx = action.payload
    },
  },
})

const { setText, updateResponse, setSelectedErrIdx } = spellerSlice.actions
const spellerReducer = spellerSlice.reducer

export {
  setText,
  updateResponse,
  spellerReducer,
  setSelectedErrIdx,
  type SpellerState,
}

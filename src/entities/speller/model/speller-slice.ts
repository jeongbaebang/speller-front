'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CheckResponse, CorrectInfo } from './speller-schema'

type Response = CheckResponse & { requestedWithStrictMode: boolean }

interface SpellerState {
  text: string
  response: Response
  responseMap: Record<number, Response>
  correctInfo: Record<number, CorrectInfo>
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
  responseMap: {},
  correctInfo: {},
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
      state.correctInfo = action.payload.errInfo.reduce(
        (acc, info) => ({ ...acc, [info.errorIdx]: info }),
        {},
      )
    },

    updateCorrectInfo: (state, action: PayloadAction<CorrectInfo>) => {
      state.correctInfo[action.payload.errorIdx] = action.payload
    },

    setSelectedErrIdx: (state, action: PayloadAction<number>) => {
      state.selectedErrIdx = action.payload
    },

    setResponseMap: (
      state,
      action: PayloadAction<Response & { pageIdx: number }>,
    ) => {
      const { pageIdx, ...response } = action.payload
      state.responseMap[pageIdx] = response
    },
  },
})

const {
  setText,
  updateResponse,
  updateCorrectInfo,
  setSelectedErrIdx,
  setResponseMap,
} = spellerSlice.actions
const spellerReducer = spellerSlice.reducer

export {
  setText,
  updateResponse,
  updateCorrectInfo,
  setSelectedErrIdx,
  setResponseMap,
  spellerReducer,
  type SpellerState,
}

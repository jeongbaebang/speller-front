'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CheckResponse, CorrectInfo } from './speller-interface'

type Response = CheckResponse & { requestedWithStrictMode: boolean }

interface SpellerState {
  text: string
  response: Response
  selectedErrIdx: number
  correctInfo: Record<number, CorrectInfo>
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
  correctInfo: {},
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
  },
})

const { setText, updateResponse, updateCorrectInfo, setSelectedErrIdx } =
  spellerSlice.actions
const spellerReducer = spellerSlice.reducer

export {
  setText,
  updateResponse,
  updateCorrectInfo,
  setSelectedErrIdx,
  spellerReducer,
  type SpellerState,
}

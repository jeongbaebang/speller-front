import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ReportStoreState {
  errInfoIdx: number
}

const initialState: ReportStoreState = {
  errInfoIdx: -1,
}

const reportSlice = createSlice({
  name: 'speller',
  initialState,
  reducers: {
    setErrInfoIdx: (state, action: PayloadAction<number>) => {
      state.errInfoIdx = action.payload
    },
  },
})

const { setErrInfoIdx } = reportSlice.actions
const reportReducer = reportSlice.reducer

export { setErrInfoIdx, reportReducer }

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FlagState {
  isSpellCheckExecuted: boolean
}

const initialState: FlagState = {
  isSpellCheckExecuted: false,
}

export const flagSlice = createSlice({
  name: 'flag',
  initialState,
  reducers: {
    setFlag: (
      state,
      action: PayloadAction<{ key: keyof FlagState; value: boolean }>,
    ) => {
      state[action.payload.key] = action.payload.value
    },
  },
})

const { setFlag } = flagSlice.actions
const flagReducer = flagSlice.reducer

export { setFlag, flagReducer }

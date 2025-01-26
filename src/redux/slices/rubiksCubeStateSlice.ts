import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TRubiksCubeStateSlice, TRubiksCubeStatus } from '@/types/redux/types'

const initialState: TRubiksCubeStateSlice = {
  // status: 'off',
  rubiksCubeIsLocked: true,
  rubiksCubeIsMixed: false,
}

const rubiksCubeStateSlice = createSlice({
  name: 'RubiksCubeState',
  initialState,
  reducers: {
    /* setRubiksCubeStatus: (state, action: PayloadAction<TRubiksCubeStatus>) => {
      state.status = action.payload
    }, */
    setRubiksCubeIsLocked: (state, action: PayloadAction<boolean>) => {
      state.rubiksCubeIsLocked = action.payload
    },
    setRubiksCubeIsMixed: (state, action: PayloadAction<boolean>) => {
      state.rubiksCubeIsMixed = action.payload
    },
  },
})

export const { /* setRubiksCubeStatus, */ setRubiksCubeIsLocked, setRubiksCubeIsMixed } =
  rubiksCubeStateSlice.actions

export default rubiksCubeStateSlice.reducer

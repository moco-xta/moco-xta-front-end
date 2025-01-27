import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TRubiksCubeStateSlice } from '@/types/redux/types'

const initialState: TRubiksCubeStateSlice = {
  rubiksCubeIsLocked: true,
  rubiksCubeIsMixed: false,
}

const rubiksCubeStateSlice = createSlice({
  name: 'RubiksCubeState',
  initialState,
  reducers: {
    setRubiksCubeIsLocked: (state, action: PayloadAction<boolean>) => {
      state.rubiksCubeIsLocked = action.payload
    },
    setRubiksCubeIsMixed: (state, action: PayloadAction<boolean>) => {
      state.rubiksCubeIsMixed = action.payload
    },
  },
})

export const { setRubiksCubeIsLocked, setRubiksCubeIsMixed } =
  rubiksCubeStateSlice.actions

export default rubiksCubeStateSlice.reducer

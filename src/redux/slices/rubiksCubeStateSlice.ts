import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TRubiksCubeStateSlice, TRubiksCubeStatus } from '@/types/redux/types'

const initialState: TRubiksCubeStateSlice = {
  status: 'off',
  isRotating: false,
}

const rubiksCubeStateSlice = createSlice({
  name: 'RubiksCubeState',
  initialState,
  reducers: {
    setRubiksCubeStatus: (state, action: PayloadAction<TRubiksCubeStatus>) => {
      state.status = action.payload
    },
    setRubiksCubeIsRotating: (state, action: PayloadAction<boolean>) => {
      state.isRotating = action.payload
    },
  },
})

export const { setRubiksCubeStatus, setRubiksCubeIsRotating } = rubiksCubeStateSlice.actions

export default rubiksCubeStateSlice.reducer

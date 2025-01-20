import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TRubiksCubeStateSlice } from '@/types/redux/types'

const initialState: TRubiksCubeStateSlice = {
  isActive: false,
}

const rubiksCubeStateSlice = createSlice({
  name: 'RubiksCubeState',
  initialState,
  reducers: {
    setRubiksCubeStatus: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload
    },
  },
})

export const { setRubiksCubeStatus } = rubiksCubeStateSlice.actions

export default rubiksCubeStateSlice.reducer

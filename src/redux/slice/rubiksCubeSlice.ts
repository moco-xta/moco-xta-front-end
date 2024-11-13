import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface RubiksCubeInterface {
  selectedPad: JSX.Element | null
}

const initialState: RubiksCubeInterface = {
  selectedPad: null,
}

const rubiksCubeSlice = createSlice({
  name: 'RubiksCube',
  initialState,
  reducers: {
    setSelectedPad: (state, action: PayloadAction<JSX.Element>) => {
      state.selectedPad = action.payload
    },
  },
})

export const { setSelectedPad } = rubiksCubeSlice.actions

export default rubiksCubeSlice.reducer

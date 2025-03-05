import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TPlayerPageStateSlice } from '@/types/redux/types'

const initialState: TPlayerPageStateSlice = {
  showInstructions: true,
  pointerLockControlsSelector: 'enter_scene_button',
  dopTargetPosition: { x: 0, y: 0, z: 0 },
  debug: false,
}

const playerStateSlice = createSlice({
  name: 'PlayerPageState',
  initialState,
  reducers: {
    setShowInstructions: (state, action: PayloadAction<boolean>) => {
      state.showInstructions = action.payload
    },
    setDoftargetPosition: (state, action: PayloadAction<{ x: number; y: number; z: number }>) => {
      state.dopTargetPosition = { ...action.payload }
    },
  },
})

export const { setShowInstructions, setDoftargetPosition } = playerStateSlice.actions

export default playerStateSlice.reducer

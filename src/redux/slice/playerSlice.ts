import { TCoordinates } from '@/types/animation/three/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as THREE from 'three'

type TPlayerSlice = {
  dopTargetPosition: TCoordinates
}

const initialState: TPlayerSlice = {
  dopTargetPosition: { x: 0, y: 0, z: 0 },
}

const playerSlice = createSlice({
  name: 'About',
  initialState,
  reducers: {
    setDoftargetPosition: (state, action: PayloadAction<{ x: number; y: number; z: number }>) => {
      state.dopTargetPosition = { ...action.payload }
    },
  },
})

export const { setDoftargetPosition } = playerSlice.actions

export default playerSlice.reducer

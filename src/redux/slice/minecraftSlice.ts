import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { MinecraftInterface } from '@/interfaces/new/minecraftInterfaces'

const initialState: MinecraftInterface = {
  texture: 'dirt',
  cubes: [
    {
      key: nanoid(),
      position: [0, 5, 0],
      texture: 'dirt',
    },
  ],
}

const minecraftSlice = createSlice({
  name: 'Minecraft',
  initialState,
  reducers: {
    addCube: (
      state,
      action: PayloadAction<[x: number, y: number, z: number]>,
    ) => {
      console.log('ADD CUBE')
      state.cubes.push({
        key: nanoid(),
        position: action.payload,
        texture: state.texture,
      })
    },
  },
})

export const { addCube } = minecraftSlice.actions

export default minecraftSlice.reducer

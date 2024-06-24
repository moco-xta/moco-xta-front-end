import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

import { MinecraftInterface } from '@/interfaces/new/minecraftInterfaces'

const initialState: MinecraftInterface = {
  texture: 'dirt',
  cubes: [
    {
      position: [0, 0, 0],
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
      state.cubes.push({
        position: action.payload,
        texture: state.texture,
      })
    },
    removeCube: (
      state,
      action: PayloadAction<[x: number, y: number, z: number]>,
    ) => {
      state.cubes = state.cubes.filter((cube) => {
        const [X, Y, Z] = cube.position
        return (
          X !== action.payload[0] ||
          Y !== action.payload[1] ||
          Z !== action.payload[2]
        )
      })
    },
    setTexture: (state, action: PayloadAction<string>) => {
      state.texture = action.payload
    },
  },
})

export const { addCube, removeCube, setTexture } = minecraftSlice.actions

export default minecraftSlice.reducer

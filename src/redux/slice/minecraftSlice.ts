import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CubeInterface, MinecraftInterface } from '@/interfaces/new/minecraftInterfaces'

// @ts-ignore
const getLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key))
const setLocalStorage = (key: string, value: CubeInterface[]) => localStorage.setItem(key, JSON.stringify(value))

const initialState: MinecraftInterface = {
  texture: 'dirt',
  cubes: getLocalStorage('cubes') || [],
}

const minecraftSlice = createSlice({
  name: 'Minecraft',
  initialState,
  reducers: {
    addCube: (state, action: PayloadAction<[x: number, y: number, z: number]>) => {
      state.cubes.push({
        position: action.payload,
        texture: state.texture,
      })
      setLocalStorage('cubes', state.cubes)
    },
    removeCube: (state, action: PayloadAction<[x: number, y: number, z: number]>) => {
      state.cubes = state.cubes.filter((cube) => {
        const [X, Y, Z] = cube.position
        return X !== action.payload[0] || Y !== action.payload[1] || Z !== action.payload[2]
      })
      setLocalStorage('cubes', state.cubes)
    },
    setTexture: (state, action: PayloadAction<string>) => {
      state.texture = action.payload
    },
    saveWorld: (state) => {
      setLocalStorage('cubes', state.cubes)
    },
    resetWorld: (state) => {
      state.cubes = []
    },
  },
})

export const { addCube, removeCube, setTexture } = minecraftSlice.actions

export default minecraftSlice.reducer

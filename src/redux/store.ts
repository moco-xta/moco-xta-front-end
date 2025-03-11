'use client'

import { configureStore } from '@reduxjs/toolkit'

import appStateSlice from './slices/appStateSlice'
import playerPageStateSlice from './slices/playerPageStateSlice'
import rubiksCubeStateSlice from './slices/rubiksCubeStateSlice'

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    playerPageState: playerPageStateSlice,
    rubiksCubeState: rubiksCubeStateSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

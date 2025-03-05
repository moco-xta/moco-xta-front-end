'use client'

import { configureStore } from '@reduxjs/toolkit'

import playerPageStateSlice from './slices/playerPageStateSlice'

export const store = configureStore({
  reducer: {
    playerPageState: playerPageStateSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

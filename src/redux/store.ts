'use client'

import { configureStore } from '@reduxjs/toolkit'

import apiSlice from '@/redux/slice/apiSlice'
import appStateSlice from './slice/appStateSlice'
import authenticationSlice from './slice/authenticationSlice'
import lifeGameSlice from './slice/lifeGameSlice'
import snakeGameSlice from './slice/snakeGameSlice'

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    authentication: authenticationSlice,
    lifeGame: lifeGameSlice,
    snakeGameSlice: snakeGameSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

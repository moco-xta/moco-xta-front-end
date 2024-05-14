'use client'

import { configureStore } from '@reduxjs/toolkit'

import apiSlice from '@/redux/slice/apiSlice'
import authenticationSlice from './slice/authenticationSlice'
import lifeGameSlice from './slice/lifeGameSlice'

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    lifeGame: lifeGameSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

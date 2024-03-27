'use client'

import { configureStore } from '@reduxjs/toolkit'

import authenticationSlice from './slice/authenticationSlice'
import apiSlice from '@/redux/slice/apiSlice'

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

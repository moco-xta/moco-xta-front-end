'use client'

import { configureStore } from '@reduxjs/toolkit'

import aboutSlice from '@/redux/slice/aboutSlice'
import apiSlice from '@/redux/slice/apiSlice'
import appStateSlice from './slice/appStateSlice'
import authenticationSlice from './slice/authenticationSlice'
import cursorStateSlice from './slice/cursorStateSlice'
import minecraftSlice from './slice/minecraftSlice'
import resourcesStateSlice from './slice/resourcesStateSlice'
import rubiksCubeSlice from './slice/rubiksCubeSlice'

export const store = configureStore({
  reducer: {
    about: aboutSlice,
    appState: appStateSlice,
    authentication: authenticationSlice,
    cursorState: cursorStateSlice,
    minecraft: minecraftSlice,
    resroucesState: resourcesStateSlice,
    rubiksCube: rubiksCubeSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

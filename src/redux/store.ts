'use client'

import { configureStore } from '@reduxjs/toolkit'

import aboutSlice from '@/redux/slice/aboutSlice'
import apiSlice from '@/redux/slice/apiSlice'
import appStateSlice from './slice/appStateSlice'
import authenticationSlice from './slice/authenticationSlice'
import cursorStateSlice from './slice/cursorStateSlice'
import minecraftSlice from './slice/minecraftSlice'
import rubiksCubeSlice from './slice/rubiksCubeSlice'

import heroAnimationSlice from './slice/animations/heroAnimationSlice'

export const store = configureStore({
  reducer: {
    about: aboutSlice,
    appState: appStateSlice,
    authentication: authenticationSlice,
    cursorState: cursorStateSlice,
    minecraft: minecraftSlice,
    rubiksCube: rubiksCubeSlice,
    heroAnimation: heroAnimationSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

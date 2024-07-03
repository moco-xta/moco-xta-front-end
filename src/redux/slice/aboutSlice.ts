import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AboutInterface } from '@/interfaces/aboutInterfaces'
import { LocationInterface } from '@/interfaces/locationInterfaces'

const initialState: AboutInterface = {
  accessToDeviceMotionAndOrientationGranted: false,
  showInstructions: true,
  isFinalRender: true,
  location: {
    latitude: 0,
    longitude: 0,
  },
  debug: {
    lights: false,
  },
}

const aboutSlice = createSlice({
  name: 'About',
  initialState,
  reducers: {
    setAccessToDeviceMotionAndOrientationGranted: (state, action: PayloadAction<boolean>) => {
      state.accessToDeviceMotionAndOrientationGranted = action.payload
    },
    setShowInstructions: (state, action: PayloadAction<boolean>) => {
      state.showInstructions = action.payload
    },
    setIsFinalRender: (state, action: PayloadAction<boolean>) => {
      state.isFinalRender = action.payload
    },
    setLocation: (state, action: PayloadAction<LocationInterface>) => {
      state.location = action.payload
    },
  },
})

export const {
  setAccessToDeviceMotionAndOrientationGranted,
  setShowInstructions,
  setIsFinalRender,
  setLocation,
} = aboutSlice.actions

export default aboutSlice.reducer

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AboutInterface } from '@/interfaces/new/aboutInterfaces'

const initialState: AboutInterface = {
  accessToDeviceMotionAndOrientationGranted: false,
  showInstructions: true,
  isFinalRender: true,
}

const aboutSlice = createSlice({
  name: 'About',
  initialState,
  reducers: {
    setAccessToDeviceMotionAndOrientationGranted: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.accessToDeviceMotionAndOrientationGranted = action.payload
    },
    setShowInstructions: (state, action: PayloadAction<boolean>) => {
      state.showInstructions = action.payload
    },
    setIsFinalRender: (state, action: PayloadAction<boolean>) => {
      state.isFinalRender = action.payload
    },
  },
})

export const {
  setAccessToDeviceMotionAndOrientationGranted,
  setShowInstructions,
  setIsFinalRender,
} = aboutSlice.actions

export default aboutSlice.reducer

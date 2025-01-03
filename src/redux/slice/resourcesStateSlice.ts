import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TResourcesState } from "@/types/redux/types";

const initialState: TResourcesState = {
  currentSection: 'front_end',
}

const resourcesStateSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload
    },
  },
})

export const {
  setCurrentSection,
} = resourcesStateSlice.actions

export default resourcesStateSlice.reducer

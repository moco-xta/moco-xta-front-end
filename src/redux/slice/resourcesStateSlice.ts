import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TResourcesState } from '@/types/redux/types'

const initialState: TResourcesState = {
  currentSection: 'front_end',
  isScrolling: false,
}

const resourcesStateSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload
    },
    setIsScrolling: (state, action: PayloadAction<boolean>) => {
      state.isScrolling = action.payload
    },
  },
})

export const { setCurrentSection, setIsScrolling } = resourcesStateSlice.actions

export default resourcesStateSlice.reducer

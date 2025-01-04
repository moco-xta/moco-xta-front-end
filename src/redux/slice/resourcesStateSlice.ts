import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TResourcesState } from '@/types/redux/types'

const initialState: TResourcesState = {
  currentPosition: 'front_end',
  isScrolling: false,
}

const resourcesStateSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setCurrentPosition: (state, action: PayloadAction<string>) => {
      state.currentPosition = action.payload
    },
    setIsScrolling: (state, action: PayloadAction<boolean>) => {
      state.isScrolling = action.payload
    },
  },
})

export const { setCurrentPosition, setIsScrolling } = resourcesStateSlice.actions

export default resourcesStateSlice.reducer

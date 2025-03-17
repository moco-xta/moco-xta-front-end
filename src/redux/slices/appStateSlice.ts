import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TAppState } from '@/types/redux/types'

const initialState: TAppState = {
  menuIsOpen: false,
  localeSwitcher: {
    isOpen: false,
    contentPosition: {
      width: null,
      top: null,
      left: null,
    },
  },
}

const appStateSlice = createSlice({
  name: 'AppState',
  initialState,
  reducers: {
    setMenuIsOpen: (state, action: PayloadAction<boolean>) => {
      state.menuIsOpen = action.payload
    },
    toggleMenu: (state) => {
      state.menuIsOpen = !state.menuIsOpen
    },
    toggleLocaleSwitcher: (state) => {
      state.localeSwitcher.isOpen = !state.localeSwitcher.isOpen
    },
    setLocalSwitcherPositionContent: (
      state,
      action: PayloadAction<{ width: number; top: number; left: number }>,
    ) => {
      state.localeSwitcher.contentPosition.width = action.payload.width
      state.localeSwitcher.contentPosition.top = action.payload.top
      state.localeSwitcher.contentPosition.left = action.payload.left
    },
  },
})

export const { setMenuIsOpen, toggleMenu, toggleLocaleSwitcher, setLocalSwitcherPositionContent } =
  appStateSlice.actions

export default appStateSlice.reducer

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { TAppState } from '@/types/redux/types'

const initialState: TAppState = {
  menuIsOpen: false,
  localeSwitcherIsOpen: false,
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
    setLocaleSwitcherIsOpen: (state, action: PayloadAction<boolean>) => {
      state.localeSwitcherIsOpen = action.payload
    },
  },
})

export const { setMenuIsOpen, toggleMenu, setLocaleSwitcherIsOpen } = appStateSlice.actions

export default appStateSlice.reducer

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
    toggleLocaleSwitcher: (state) => {
      state.localeSwitcherIsOpen = !state.localeSwitcherIsOpen
    },
  },
})

export const { setMenuIsOpen, toggleMenu, toggleLocaleSwitcher } = appStateSlice.actions

export default appStateSlice.reducer

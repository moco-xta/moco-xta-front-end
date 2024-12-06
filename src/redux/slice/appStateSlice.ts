import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppStateSliceInterface } from '@/interfaces/redux/reduxSlicesInterfaces'

const initialState: AppStateSliceInterface = {
  menuIsOpen: false,
  authenticationIsOpen: false,
  localeSwitcherIsOpen: false,
  addReviewIsOpen: false,
}

const appStateSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setMenuIsOpen: (state, action: PayloadAction<boolean>) => {
      state.menuIsOpen = action.payload
    },
    toggleMenu: (state) => {
      state.menuIsOpen = !state.menuIsOpen
    },
    setAuthenticationIsOpen: (state, action: PayloadAction<boolean>) => {
      state.authenticationIsOpen = action.payload
    },
    setLocaleSwitcherIsOpen: (state, action: PayloadAction<boolean>) => {
      state.localeSwitcherIsOpen = action.payload
    },
    setAddReviewIsOpen: (state, action: PayloadAction<boolean>) => {
      state.addReviewIsOpen = action.payload
    },
  },
})

export const {
  setMenuIsOpen,
  toggleMenu,
  setAuthenticationIsOpen,
  setLocaleSwitcherIsOpen,
  setAddReviewIsOpen,
} = appStateSlice.actions

export default appStateSlice.reducer

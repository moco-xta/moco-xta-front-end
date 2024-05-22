import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppStateSliceInterface } from '@/interfaces/new/reduxSlicesInterfaces'

const initialState: AppStateSliceInterface = {
  menuIsOpen: false,
  authenticationIsOpen: false,
  localeSwitcherIsOpen: false,
}

const appStateSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setMenuIsOpen: (state, action: PayloadAction<boolean>) => {
      state.menuIsOpen = action.payload
    },
    setAuthenticationIsOpen: (state, action: PayloadAction<boolean>) => {
      state.authenticationIsOpen = action.payload
    },
    setLocaleSwitcherIsOpen: (state, action: PayloadAction<boolean>) => {
      state.localeSwitcherIsOpen = action.payload
    },
  },
})

export const {
  setMenuIsOpen,
  setAuthenticationIsOpen,
  setLocaleSwitcherIsOpen,
} = appStateSlice.actions

export default appStateSlice.reducer

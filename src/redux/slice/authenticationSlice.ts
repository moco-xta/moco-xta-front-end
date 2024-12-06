import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthenticationSliceInterface } from '@/interfaces/redux/reduxSlicesInterfaces'

import { getAccessToken } from '@/helpers/localStorageHelpers'

const initialState: AuthenticationSliceInterface = {
  isAuthenticated: getAccessToken() ? true : false,
}

const authenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
  },
})

export const { setIsAuthenticated } = authenticationSlice.actions

export default authenticationSlice.reducer

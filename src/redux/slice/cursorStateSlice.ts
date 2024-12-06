import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CursorStateSliceInterface } from '@/interfaces/redux/reduxSlicesInterfaces'

const initialState: CursorStateSliceInterface = {
  state: 'default',
  position: {
    x: 0,
    y: 0,
  },
}

const cursorStateSlice = createSlice({
  name: 'Cursor',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<'default' | 'mind_bending'>) => {
      console.log('action.payload', action.payload)
      state.state = action.payload
    },
  },
})

export const { setState } = cursorStateSlice.actions

export default cursorStateSlice.reducer

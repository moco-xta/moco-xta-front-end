import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CursorStateSliceInterface } from '@/interfaces/reduxSlicesInterfaces'

const initialState: CursorStateSliceInterface = {}

const cursorStateSlice = createSlice({
  name: 'Cursor',
  initialState,
  reducers: {},
})

export const {} = cursorStateSlice.actions

export default cursorStateSlice.reducer

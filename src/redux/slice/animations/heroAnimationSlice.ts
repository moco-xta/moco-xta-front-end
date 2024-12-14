import { createSlice } from '@reduxjs/toolkit'
import { gsap } from 'gsap'

import { default as heroConstants } from '@/constants/animations/home/hero/canvas/groups/heroConstants.json'

interface HeroAnimationInterface {
  paused: boolean
}

const initialState: HeroAnimationInterface = {
  paused: false,
}

const heroAnimationSlice = createSlice({
  name: 'HeroAnimation',
  initialState,
  reducers: {
    pause: (state) => {
      state.paused = !state.paused
    },
  },
})

export const { pause } = heroAnimationSlice.actions

export default heroAnimationSlice.reducer

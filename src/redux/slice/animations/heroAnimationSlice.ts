import { createSlice } from '@reduxjs/toolkit'
import { gsap } from 'gsap'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'

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

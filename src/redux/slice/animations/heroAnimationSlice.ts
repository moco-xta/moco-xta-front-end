import { createSlice } from '@reduxjs/toolkit'
import { gsap } from 'gsap'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'

interface HeroAnimationInterface {
  timeline: GSAPTimeline
  paused: boolean
}

const initialState: HeroAnimationInterface = {
  timeline: gsap.timeline({
    delay: heroAnimationsConstants.DELAY / heroAnimationsConstants.SPEED,
    smoothChildTiming: true,
    // yoyo: true
  }),
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

import React from 'react'

import HeroSlice from './hero_slice'

import './index.scss'

export default function HomeOverlay() {
  return (
    <div id='home_overlay'>
      <HeroSlice />
    </div>
  )
}

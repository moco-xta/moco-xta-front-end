import React from 'react'

import HomeOverlay from './home_overlay'
import { HeroCanvas } from '@/components/three/canvas'

import './index.scss'

export default function HomePage() {
  return (
    <div id='home_scroll_container'>
      <HomeOverlay />
      <HeroCanvas />
    </div>
  )
}

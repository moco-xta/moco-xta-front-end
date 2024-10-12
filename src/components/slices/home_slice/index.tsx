import React from 'react'

import Overlay from './Overlay'
import HomeCanvas from '@/components/three/canvas/home_canvas/HomeCanvas'

import './index.scss'

export default function HomeSlice() {
  return (
    <section id='home_slice'>
      <Overlay />
      <HomeCanvas />
    </section>
  )
}

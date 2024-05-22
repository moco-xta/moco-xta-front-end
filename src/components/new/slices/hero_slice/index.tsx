import React from 'react'

import HeadText from './head_text'
import HeroCanvas from '../../three/canvas/hero_canvas/HeroCanvas'

import './index.scss'

export default function HeroSlice() {
  return (
    <section id='hero_slice'>
      <HeadText />
      <HeroCanvas />
    </section>
  )
}

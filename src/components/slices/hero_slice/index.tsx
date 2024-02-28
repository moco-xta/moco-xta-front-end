import React from 'react'

import DefaultCanvas from '@/components/r3f/canvas/default_canvas'

import './index.scss'

export default function HeroSlice() {
  return (
    <div id='hero_slice'>
      <div id='head_text'>
        <h1>Federico DESMOULIN</h1>
        <h3>Creative developer</h3>
      </div>
      <div id='default_scene_container'>
        <DefaultCanvas />
      </div>
    </div>
  )
}

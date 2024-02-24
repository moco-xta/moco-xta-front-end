import React from 'react'

import DefaultCanvas from '@/components/r3f/canvas/default_canvas'

import './index.scss'

export default function Hero() {
  return (
    <div id='hero_slice'>
      <div id='test'>Federico DESMOULIN</div>
      <div id='default_scene_container'>
        <DefaultCanvas />
      </div>
    </div>
  )
}

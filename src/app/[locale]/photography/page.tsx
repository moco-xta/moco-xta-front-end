import React from 'react'

import PhotographyCanvas from '@/components/r3f/canvas/photography_canvas'

import './index.scss'

export default function Photography() {
  return (
    <div id='photography_container'>
      <div id='photography_scene_container'>
        <PhotographyCanvas />
      </div>
    </div>
  )
}

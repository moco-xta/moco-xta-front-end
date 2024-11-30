import React from 'react'

import RubiksCubeCanvas from '@/components/three/canvas/rubiks_cube_canvas/RubiksCubeCanvas'

import './index.scss'

export default function PerformedWithSlice() {
  return (
    <section
      id='performed_with_slice'
      className='fullscreen'
    >
      <RubiksCubeCanvas />
    </section>
  )
}

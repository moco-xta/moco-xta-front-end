import React from 'react'

import RubiksCubeCanvas from '../../three/canvas/rubiks_cube_canvas/RubiksCubeCanvas'
import PerformedWith from './performed_with'

import './index.scss'

export default function PerformedWithSlice() {
  return (
    <section id='performed_with_slice'>
      <RubiksCubeCanvas />
      <PerformedWith />
    </section>
  )
}

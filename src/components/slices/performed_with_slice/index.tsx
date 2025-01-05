import React from 'react'

import RubiksCubeCanvas from '../../three/canvas/rubiks_cube/RubiksCubeCanvas'
import PerformedWithTextBlock from './performed_with_text_block'

import './index.scss'

export default function PerformedWithSlice() {
  return (
    <section id='performed_with_slice'>
      <RubiksCubeCanvas />
      {/* <PerformedWithTextBlock /> */}
    </section>
  )
}

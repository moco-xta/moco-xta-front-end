import React from 'react'

import RubiksCubeCanvas from '../../three/canvas/rubiks_cube_canvas/RubiksCubeCanvas'
import TextBlockSimple from '../../shared/text_blocks/text_block_simple'

import variables from '@/styles/new/variables.module.scss'
import './index.scss'

export default function PerformedWithSlice() {
  return (
    <section id='performed_with_slice'>
      <RubiksCubeCanvas />
      <TextBlockSimple
        title={'HOME.MAIN_SKILLS.INTRODUCTION.TITLE'}
        paragraph={'HOME.MAIN_SKILLS.INTRODUCTION.PARAGRAPH'}
        blockStyle={{
          width: '30%',
          padding: `0 ${variables.left_right_margin} 0 0`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      />
    </section>
  )
}

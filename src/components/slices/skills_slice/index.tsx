import React from 'react'

import RubiksCubeCanvas from '@/components/three/canvas/rubiks_cube_canvas/RubiksCubeCanvas'
import SkillCanvas from '@/components/three/canvas/skill_canvas/SkillCanvas'

import './index.scss'

export default function SkillsSlice() {
  return (
    <section id='skills_slice'>
      <SkillCanvas />
      <RubiksCubeCanvas />
    </section>
  )
}

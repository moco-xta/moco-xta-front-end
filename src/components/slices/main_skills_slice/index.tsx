import React from 'react'

import Parallax from '@/components/parallax'
import MainSkillsCanvas from '@/components/three/canvas/main_skills_canvas/MainSkillsCanvas'

import './index.scss'

export default function MainSkillsSlice() {
  return (
    <Parallax
      id='main_skills_slice_parallax'
      speed={0}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        id='main_skills_slice'
        className='fullscreen'
      >
        <MainSkillsCanvas />
      </section>
    </Parallax>
  )
}

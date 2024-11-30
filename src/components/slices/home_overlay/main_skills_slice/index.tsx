import React from 'react'

import Parallax from '@/components/parallax'
import WhatAreMySkills from './what_are_my_skills'
import FrameworksSkills from './frameworks_skills'

import './index.scss'

export default function MainSkillsSlice() {
  return (
    <Parallax
      id='main_skills_slice_parallax'
      speed={1}
      style={{
        marginTop: '20vh',
        alignSelf: 'flex-start',
      }}
    >
      <section id='main_skills_slice'>
        <div id='main_skills_content'>
          <WhatAreMySkills />
          <FrameworksSkills />
        </div>
      </section>
    </Parallax>
  )
}

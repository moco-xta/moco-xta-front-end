import React from 'react'

import Parallax from '@/components/parallax'
import WhatAreMySkills from './what_are_my_skills'
import Frameworks from './frameworks'

import './index.scss'

export default function MainSkillsSlice() {
  return (
    <Parallax
      id='main_skills_slice_parallax'
      speed={1}
      style={{
        marginTop: '15vh',
        alignSelf: 'flex-start',
        background: 'purple',
      }}
    >
      <section id='main_skills_slice'>
        <div id='main_skills_content'>
          <WhatAreMySkills />
          <Frameworks />
        </div>
      </section>
    </Parallax>
  )
}

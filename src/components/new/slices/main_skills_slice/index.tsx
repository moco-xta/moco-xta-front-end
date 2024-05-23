import React from 'react'

import Introduction from './introduction'
import MainSkillsCanvas from '../../three/canvas/main_skills_canvas/MainSkillsCanvas'
import MainSkills from './main_skills'

import './index.scss'

export default function MainSkillsSlice() {
  return (
    <section id='main_skills_slice'>
      <Introduction />
      <MainSkillsCanvas />
      <MainSkills />
    </section>
  )
}

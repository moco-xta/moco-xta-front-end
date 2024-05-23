import React from 'react'

import TextBlockSimple from '../../shared/text_blocks/text_block_simple'
import MainSkillsCanvas from '../../three/canvas/main_skills_canvas/MainSkillsCanvas'
import MainSkills from './main_skills'

import './index.scss'

export default function MainSkillsSlice() {
  return (
    <section id='main_skills_slice'>
      <TextBlockSimple
        title={'HOME.MAIN_SKILLS.INTRODUCTION.TITLE'}
        paragraph={'HOME.MAIN_SKILLS.INTRODUCTION.PARAGRAPH'}
        blockStyle={{ padding: '50px 35% 0 35%' }}
      />
      <MainSkillsCanvas />
      <MainSkills />
    </section>
  )
}

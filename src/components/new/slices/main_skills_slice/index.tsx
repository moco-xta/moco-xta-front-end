import React from 'react'

import IntroductionTextBlock from './introduction_text_block'
import MainSkillsCanvas from '../../three/canvas/main_skills_canvas/MainSkillsCanvas'
import MainSkillsTextBlocks from './main_skills_text_blocks'
import RealTime3D from './real_time_3D'

import useResize from '@/hooks/new/useResize'

import './index.scss'

export default function MainSkillsSlice() {
  const { isDesktop } = useResize()

  return (
    <section id='main_skills_slice'/*  className='responsive_background' */>
      <IntroductionTextBlock />
      {isDesktop && <MainSkillsCanvas />}
      <MainSkillsTextBlocks />
      <RealTime3D />
    </section>
  )
}

import React from 'react'

import IntroductionTextBlock from './introduction_text_block'
import MainSkillsCanvas from '../../three/canvas/main_skills_canvas/MainSkillsCanvas'
import MainSkillsTextBlocks from './main_skills_text_blocks'
import RealTime3D from './real_time_3D'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import './index.scss'

export default function MainSkillsSlice() {
  const { isLargeScreen } = useIsLargeScreen()

  return (
    <section id='main_skills_slice' /*  className='responsive_background' */>
      <IntroductionTextBlock />
      {isLargeScreen && <MainSkillsCanvas />}
      <MainSkillsTextBlocks />
      <RealTime3D />
    </section>
  )
}

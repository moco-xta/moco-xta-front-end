import React from 'react'

import HeadText from './head_text'
import HeroCanvas from '../../three/canvas/hero_canvas/HeroCanvas'
import ScrollDown from '@/components/new/shared/scroll_down'

import variables from '@/styles/new/variables.module.scss'
import './index.scss'

export default function HeroSlice() {
  return (
    <section id='hero_slice'>
      <HeadText />
      <HeroCanvas />
      <ScrollDown
        top={'65vh'}
        color={variables.grey_dark}
      />
    </section>
  )
}

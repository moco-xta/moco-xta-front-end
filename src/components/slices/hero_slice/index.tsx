import React from 'react'

import HeadTextBlock from './head_text_block'
import HeroCanvas from '../../three/canvas/hero_canvas/HeroCanvas'
import ScrollDown from '@/components/shared/scroll_down'

import variables from '@/styles/variables.module.scss'
import './index.scss'

export default function HeroSlice() {
  return (
    <section id='hero_slice'>
      {/* <HeadTextBlock /> */}
      <HeroCanvas />
      <ScrollDown
        top={'65vh'}
        color={variables.grey_dark}
      />
    </section>
  )
}

import React from 'react'

import TextBlockTransitionNine from '@/animation/texts/text_block_transition_nine'
import HeroCanvas from '@/components/three/canvas/hero/HeroCanvas'

import './index.scss'

export default function Hero() {
  return (
    <section id='hero_section'>
      <TextBlockTransitionNine
        tag={'p'}
        id={'hero_heading'}
        className={'text_block_animation_nine'}
        text={'We help brands create digital\nexperiences that connect with\ntheir audience'}
      />
      <HeroCanvas />
    </section>
  )
}

'use client'

import React from 'react'

import HeadText from './head_text'
import HeroCanvas from '@/components/r3f/canvas/hero_canvas'
import ScrollDown from '@/components/shared/scroll_down'

import './index.scss'

export default function HeroSlice() {
  return (
    <section id='hero_slice'>
      <HeadText />
      <div id='hero_canvas_container'>
        <HeroCanvas />
      </div>

      <ScrollDown />
    </section>
  )
}

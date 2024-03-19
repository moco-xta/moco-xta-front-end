'use client'

import React from 'react'

import HeadText from './head_text'
import Background from './background'
import HeroCanvas from '@/components/r3f/canvas/hero_canvas'
import Role from './role'
import ScrollDown from '@/components/shared/scroll_down'

import './index.scss'

export default function HeroSlice() {
  return (
    <section id='hero_slice'>
      <HeadText />
      <Background />
      <div id='hero_canvas_container'>
        <HeroCanvas />
      </div>
      <Role />
      <ScrollDown />
    </section>
  )
}

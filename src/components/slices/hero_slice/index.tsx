'use client'

import React from 'react'

import HeadText from './head_text'
import HeroCanvas from '@/components/r3f/canvas/hero_canvas'
import GradientBackground from '@/components/shared/gradient_background'

import './index.scss'

export default function HeroSlice() {
  return (
    <div id='hero_slice'>
      <HeadText />
      <div id='default_scene_container'>
        <HeroCanvas />
      </div>
      <GradientBackground />
    </div>
  )
}

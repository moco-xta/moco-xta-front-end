'use client'

import React from 'react'

import HeadText from './head_text'
import HeroCanvas from '@/components/r3f/canvas/hero_canvas'

import './index.scss'
import GradientBackground from './gradient_background'

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

'use client'

import React from 'react'

import HeadText from './head_text'
import HeroCanvas from '@/components/r3f/canvas/hero_canvas'
import GradientBackground from '@/components/shared/gradient_background'

import './index.scss'

export default function HeroSlice() {
  return (
    <div id='hero_slice'>
      <div id='hero_slice_head_text'>
        <HeadText />
      </div>
      <div id='hero_slice_canvas'>
        <HeroCanvas />
      </div>
      <div id='hero_slice_gradient_background'>
        <GradientBackground />
      </div>
    </div>
  )
}

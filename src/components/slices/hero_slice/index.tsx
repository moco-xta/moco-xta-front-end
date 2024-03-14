'use client'

import React from 'react'

import HeadText from './head_text'
import HeroCanvas from '@/components/r3f/canvas/hero_canvas'
/* import GradientBackground from '@/components/shared/gradient_background' */
import ScrollIcon from '@/components/icons/scroll_button'

import './index.scss'

export default function HeroSlice() {
  return (
    <div id='hero_slice'>
      <div id='hero_slice_head_text'>
        <div id='head_text_container'></div>
        {/* <HeadText /> */}
      </div>
      <div id='hero_slice_canvas'>
        <HeroCanvas />
      </div>
      <div id='hero_slice_gradient_background'>
        <img
          className='hero_background_test'
          src='/img/test/hero_background_test.jpg'
          alt=''
        />
        {/* <GradientBackground /> */}
      </div>
      <div id='scroll_icon_container'>
        <ScrollIcon />
      </div>
    </div>
  )
}

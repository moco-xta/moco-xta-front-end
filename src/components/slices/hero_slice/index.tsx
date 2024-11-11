import React from 'react'

import Heading from './Heading'
import Sun from '@/assets/svg/Sun'

import './index.scss'

export default function HeroSlice() {
  return (
    <div
      id='hero_slice'
      className='fullscreen center_content'
    >
      <Heading />
      <Sun />
    </div>
  )
}

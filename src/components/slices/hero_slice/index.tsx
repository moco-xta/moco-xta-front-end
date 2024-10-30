import React from 'react'

import Heading from './Heading'

import './index.scss'

export default function HeroSlice() {
  return (
    <div
      id='hero_slice'
      className='fullscreen center_content'
      style={{ /* background: '#ff1377', */ overflow: 'hidden' }}
    >
      <Heading />
    </div>
  )
}

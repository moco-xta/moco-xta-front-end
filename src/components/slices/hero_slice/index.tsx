import React from 'react'

import Parallax from '@/components/Parallax'

import './index.scss'

export default function HeroSlice() {
  return (
    <Parallax
      id='hero_slice_parallax'
      speed={0}
      style={{
        alignSelf: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <section
        id='hero_slice'
        className='fullscreen'
      >
        {/* <div
          id='box_test_first_section'
          className='box_test'
        /> */}
      </section>
    </Parallax>
  )
}

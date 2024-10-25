import React from 'react'

import Parallax from '@/components/Parallax'

import './index.scss'

export default function IntroductionSlice() {
  return (
    <Parallax
      id='introduction_slice_parallax'
      speed={-4}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        id='introduction_slice'
        className='fullscreen'
      >
        <div
          id='box_test_second_section'
          className='box_test'
        />
      </section>
    </Parallax>
  )
}

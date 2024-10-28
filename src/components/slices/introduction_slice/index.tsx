import React from 'react'

import Parallax from '@/components/Parallax'

import { default as videosConstants } from '@/constants/assets/videosConstants.json'

import './index.scss'

export default function IntroductionSlice() {
  return (
    <Parallax
      id='introduction_slice_parallax'
      speed={-6}
      style={{
        alignSelf: 'flex-start',
      }}
    >
      <section
        id='introduction_slice'
        className='fullscreen'
      >
        <video
          width='1920'
          height='1080'
          autoPlay
          loop
          muted
        >
          <source
            src={videosConstants.HOME.INTRODUCTION.GOUTTE_DOR}
            type='video/mp4'
          />
        </video>
      </section>
    </Parallax>
  )
}

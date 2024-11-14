import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'

import Sun from '@/assets/svg/Sun'

import { sunAnimation } from 'animations/gsap/hero'

export default function SunSlice() {
  useGSAP(() => {
    gsap.to(sunAnimation.selector, sunAnimation.to.params)
  })

  return (
    <div
      id='sun_slice'
      className='fullscreen'
    >
      <div id='sun_container'>
        <Sun />
      </div>
    </div>
  )
}

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { HeroCanvas } from '@/components/three/canvas'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'

import './index.scss'

export default function HeroSlice() {
  const timeline = gsap.timeline({
    delay: heroAnimationsConstants.DELAY / heroAnimationsConstants.SPEED,
  })
  const heroSliceRef = useRef<HTMLElement>(null!)

  useGSAP(() => {}, { scope: heroSliceRef })

  return (
    <>
      <section
        ref={heroSliceRef}
        id='hero_slice'
        className='fullscreen'
      >
        <HeroCanvas timeline={timeline} />
      </section>
    </>
  )
}

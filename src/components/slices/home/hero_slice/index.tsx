import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import Controls from '@/components/buttons/animation/controls'
import { HeroCanvas } from '@/components/three/canvas'

import './index.scss'

export default function HeroSlice() {
  /* const { timeline } = useGSAPTimelineContext() */

  const heroSliceRef = useRef<HTMLElement>(null!)

  /* useGSAP(
    () => {
      timeline.to(
        heroSliceRef.current.style,
        {
          keyframes: heroSliceAnimations.portrait.keyFrames,
          duration: heroSliceAnimations.portrait.duration,
        },
        heroSliceAnimations.portrait.delay,
      )
    },
    { scope: heroSliceRef },
  )

  useGSAP(
    () => {
      timeline.to(
        heroSliceRef.current.style,
        {
          keyframes: heroSliceAnimations.portrait.keyFrames,
          duration: heroSliceAnimations.portrait.duration,
          onComplete: () => {
            heroSliceRef.current.style.background = '#000'
            heroSliceRef.current.style.backgroundImage = 'unset'
          },
        },
        heroSliceAnimations.portrait.delay,
      )
    },
    { scope: heroSliceRef },
  ) */

  return (
    <section
      ref={heroSliceRef}
      id='hero_slice'
      className='fullscreen'
      style={{
        background: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Controls />
      <HeroCanvas />
    </section>
  )
}

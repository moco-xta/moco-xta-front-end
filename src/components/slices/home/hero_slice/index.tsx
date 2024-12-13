import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { HeroCanvas } from '@/components/three/canvas'
import PauseAnimationButton from '@/components/buttons/pause_animation_button'

import './index.scss'
import { heroSliceAnimations } from '@/animations/index'

export default function HeroSlice() {
  const { timeline } = useGSAPTimelineContext()

  const heroSliceRef = useRef<HTMLElement>(null!)

  useGSAP(
    () => {
      console.log('timeline', timeline)
      console.log('gsap.context()', gsap.context())
      console.log('timeline.labels', timeline.labels)

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
      <HeroCanvas />
      <PauseAnimationButton />
    </section>
  )
}

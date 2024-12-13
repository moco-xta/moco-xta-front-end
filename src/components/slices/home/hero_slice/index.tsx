import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { HeroCanvas } from '@/components/three/canvas'
import PauseAnimationButton from '@/components/buttons/pause_animation_button'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as heroSliceAnimationsConstants } from '@/constants/animations/home/hero/hero_slice/heroSliceAnimationsConstants.json'

import './index.scss'
import { heroSliceAnimations } from '@/animations/home/hero'

export default function HeroSlice() {
  const { timeline } = useGSAPTimelineContext()

  const [portraitDuration] = useState<number>(
    heroSliceAnimationsConstants.SUBS.PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [portraitDelay] = useState<number>(
    heroSliceAnimationsConstants.SUBS.PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const heroSliceRef = useRef<HTMLElement>(null!)

  useGSAP(
    () => {
      // console.log('timeline.current', timeline.current)
      // timeline.current.addLabel('greeting', 0)
      // timeline.current.timeline()
      // console.log('gsap.context()', gsap.context())
      timeline.to(
        heroSliceRef.current.style,
        {
          keyframes: heroSliceAnimations.backgroundImage.keyFrames,
          duration: portraitDuration,
        },
        portraitDelay,
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

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { HeroCanvas } from '@/components/three/canvas'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as heroSliceAnimationsConstants } from '@/constants/animations/home/hero/hero_slice/heroSliceAnimationsConstants.json'

import './index.scss'

export default function HeroSlice() {
  const [portraitDuration] = useState<number>(
    heroSliceAnimationsConstants.SUBS.PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [portraitDelay] = useState<number>(
    heroSliceAnimationsConstants.SUBS.PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const heroSliceRef = useRef<HTMLElement>(null!)

  const timeline = gsap.timeline({
    delay: heroAnimationsConstants.DELAY / heroAnimationsConstants.SPEED,
  })

  useEffect(() => {
    console.log('heroSliceRef', heroSliceRef)
  }, [heroSliceRef])

  useGSAP(
    () => {
      if (heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATE) {
        console.log('TEST')
        timeline.to(
          heroSliceRef.current.style,
          {
            keyframes: {
              '0%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['0_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '10%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['10_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '20%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['20_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '30%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['30_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '40%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['40_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '50%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['50_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '60%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['60_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '70%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['70_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '80%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['80_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '90%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['90_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              '100%': {
                backgroundImage:
                  heroSliceAnimationsConstants.SUBS.PORTRAIT.ANIMATION['100_PERCENT']
                    .BACKGROUND_IMAGE,
              },
              easeEach: 'none',
            },
            duration: portraitDuration,
          },
          portraitDelay,
        )
      }
    },
    { scope: heroSliceRef },
  )

  return (
    <>
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
        <HeroCanvas timeline={timeline} />
      </section>
    </>
  )
}

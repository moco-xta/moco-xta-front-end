import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import Controls from '@/components/buttons/animation/controls'
import { HeroCanvas } from '@/components/three/canvas'

import { heroSliceDefaultValues, getHeroSliceAnimationsData } from '@/data/home/hero/heroSliceData'

import { animate } from 'animations'

import './index.scss'

export default function HeroSlice() {
  const { timeline } = useGSAPTimelineContext()

  const heroSliceRef = useRef<HTMLElement>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: heroSliceRef.current,
        animationsData: getHeroSliceAnimationsData(),
      })
    },
    { scope: heroSliceRef },
  )

  return (
    <section
      ref={heroSliceRef}
      {...heroSliceDefaultValues}
    >
      <Controls />
      <HeroCanvas />
    </section>
  )
}

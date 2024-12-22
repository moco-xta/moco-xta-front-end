import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import type { TGroup } from '@/types/animation/three/componentsTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HiText from './HiText'

import { greetingTextsGroupData } from '@/data/home/hero/three/greeting/texts/greetingTextsGroupData'

import { animate } from 'animations'

export default function GreetingTextsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const greetingTextsGroupRef = useRef<TGroup>(null!)

  useEffect(() => {
    console.log('greetingTextsGroupRef', greetingTextsGroupRef.current)
  }, [greetingTextsGroupRef])

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: greetingTextsGroupRef.current,
        label: greetingTextsGroupData.label!,
        duration: greetingTextsGroupData.duration,
        animations: greetingTextsGroupData.animations!,
      })
    },
    { scope: greetingTextsGroupRef },
  )

  return (
    <group ref={greetingTextsGroupRef}>
      <HiText />
    </group>
  )
}

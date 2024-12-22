import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import type { TGroup } from '@/types/animation/three/componentsTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import GreetingTextsGroup from './texts/GreetingTextsGroup'

import { greetingGroupData } from '@/data/home/hero/three/greeting/greetingGroupData'

import { showHide } from 'animations'

export default function GreetingGroup() {
  const { timeline } = useGSAPTimelineContext()

  const greetingGroupRef = useRef<TGroup>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: greetingGroupRef.current,
        label: greetingGroupData.label!,
        duration: greetingGroupData.duration,
      })
    },
    { scope: greetingGroupRef },
  )

  return (
    <group ref={greetingGroupRef}>
      <GreetingTextsGroup />
    </group>
  )
}

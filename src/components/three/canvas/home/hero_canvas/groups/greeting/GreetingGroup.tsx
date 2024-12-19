import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import GreetingTextsGroup from './texts/GreetingTextsGroup'

import { greetingGroupData } from '@/data/hero/three/canvas/hero/greeting_group/greetingGroupData'

import { showHideAnimation } from 'animations'

export default function GreetingGroup() {
  const { timeline } = useGSAPTimelineContext()

  const greetingGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHideAnimation({
        timeline: timeline,
        ref: greetingGroupRef.current,
        duration: greetingGroupData.duration,
        label: greetingGroupData.label!,
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

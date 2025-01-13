import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import GreetingTextsGroup from './texts/GreetingTextsGroup'

import { getGreetingGroupAnimationsData } from '@/data/hero/three/greeting/greetingGroupData'

import { showHide } from '@/animation/index'

export default function GreetingGroup() {
  const { timeline } = useGSAPTimelineContext()

  const greetingGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: greetingGroupRef.current,
        animationsData: getGreetingGroupAnimationsData(),
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

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import GreetingTextsGroup from './texts/GreetingTextsGroup'

import { getGreetingGroupAnimationsData } from '@/data/home/hero/three/greeting/greetingGroupData'

import { showHide } from 'animations'

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

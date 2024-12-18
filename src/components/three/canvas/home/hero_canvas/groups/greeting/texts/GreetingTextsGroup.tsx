import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HiText from './HiText'
import ImText from './ImText'
import FedericoText from './FedericoText'

import { greetingTextsGroupData } from '@/data/hero/three/canvas/hero/greeting_group/greeting_texts_group/greetingTextsGroupData'

import { greetingTextsGroupAnimations } from '@/animations/home/hero/new/canvas/greeting_group/greeting_texts_group/greetingTextsGroupAnimations'

export default function GreetingTextsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const greetingTextGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      greetingTextsGroupAnimations(timeline, greetingTextGroupRef)
    },
    { scope: greetingTextGroupRef },
  )

  return (
    <group
      ref={greetingTextGroupRef}
      position={greetingTextsGroupData.default!.position}
      rotation={greetingTextsGroupData.default!.rotation}
    >
      <HiText />
      <ImText />
      <FedericoText />
    </group>
  )
}

import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
// import { useGSAP } from '@gsap/react'

// import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import HiText from './HiText'
import ImText from './ImText'
import FedericoText from './FedericoText'

import { setGreetingTextsPositions } from '@/helpers/heroAnimationsHelpers'

// import { getGreetingTextsGroupAnimationsData } from '@/data/hero/three/greeting/texts/greetingTextsGroupData'

// import { animate } from '@/animation/index'

export default function GreetingTextsGroup() {
  // const { timeline } = useGSAPTimelineContext()

  const greetingTextsGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    setGreetingTextsPositions(greetingTextsGroupRef)
  }, [greetingTextsGroupRef])

  return (
    <group ref={greetingTextsGroupRef}>
      <HiText />
      <ImText />
      <FedericoText />
    </group>
  )
}

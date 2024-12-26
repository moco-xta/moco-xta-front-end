import React, { useLayoutEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HiText from './HiText'
import ImText from './ImText'
import FedericoText from './FedericoText'

import { setGreetingTextsPositions } from '@/helpers/animations/heroAnimationsHelpers'

import { getGreetingTextsGroupAnimationsData } from '@/data/home/hero/three/greeting/texts/greetingTextsGroupData'

import { animate } from 'animations'

export default function GreetingTextsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const greetingTextsGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    setGreetingTextsPositions(greetingTextsGroupRef)
  }, [greetingTextsGroupRef])

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: greetingTextsGroupRef.current,
        animationsData: getGreetingTextsGroupAnimationsData(),
      })
    },
    { scope: greetingTextsGroupRef },
  )

  return (
    <group ref={greetingTextsGroupRef}>
      <HiText />
      <ImText />
      <FedericoText />
    </group>
  )
}

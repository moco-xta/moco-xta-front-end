import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import AText from './texts/AText'
import FrontText from './texts/FrontText'
import EndText from './texts/EndText'
import DeveloperText from './texts/DeveloperText'

import { default as developerTextsGroupConstants } from '@/constants/animations/home/hero/canvas/groups/developer/developerTextsGroupConstants.json'

import { developerTextsGroupAnimations } from 'animations'

export default function DeveloperTextsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const developerTextsGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (developerTextsGroupRef.current)
      developerTextsGroupRef.current.visible = developerTextsGroupConstants.DEFAULT.VISIBILITY
  }, [developerTextsGroupRef])

  useGSAP(
    () => {
      const animation = developerTextsGroupAnimations(developerTextsGroupRef.current)
      // VISIBILITY
      timeline.to(
        developerTextsGroupRef.current,
        {
          keyframes: animation.visibility.keyframes,
          duration: animation.visibility.duration,
        },
        animation.delay,
      )
    },
    { scope: developerTextsGroupRef },
  )

  return (
    <group ref={developerTextsGroupRef}>
      <AText />
      <FrontText />
      <EndText />
      <DeveloperText />
    </group>
  )
}

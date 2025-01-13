import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import AlsoText from './AlsoText'
import KnowText from './KnowText'
import AsText from './AsText'

import {
  alsoKnowAsTextsGroupDefaultValues,
  getAlsoKnowAsTextsGroupAnimationsData,
} from '@/data/hero/three/also_know_as/texts/alsoKnowAsTextsGroupData'

import { showHide } from '@/animation/index'

export default function AlsoKnowAsTextsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const alsoKnowAsTextsGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: alsoKnowAsTextsGroupRef.current,
        animationsData: getAlsoKnowAsTextsGroupAnimationsData(),
      })
    },
    { scope: alsoKnowAsTextsGroupRef },
  )

  return (
    <group
      ref={alsoKnowAsTextsGroupRef}
      {...alsoKnowAsTextsGroupDefaultValues}
    >
      <AlsoText />
      <KnowText />
      <AsText />
    </group>
  )
}

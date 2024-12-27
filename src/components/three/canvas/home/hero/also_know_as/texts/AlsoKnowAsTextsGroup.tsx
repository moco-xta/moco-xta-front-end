import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import AlsoText from './AlsoText'
import KnowText from './KnowText'
import AsText from './AsText'

import {
  getAlsoKnowAsTextsGroupAnimationsData,
  getAlsoKnowAsTextsGroupDefaultValues,
} from '@/data/home/hero/three/also_know_as/texts/alsoKnowAsTextsGroupData'

import { showHide } from 'animations'

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
      {...getAlsoKnowAsTextsGroupDefaultValues}
    >
      <AlsoText />
      <KnowText />
      <AsText />
    </group>
  )
}

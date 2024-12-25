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
import { Box } from '@react-three/drei'

export default function AlsoKnowAsTextsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: alsoKnowAsGroupRef.current,
        animationsData: getAlsoKnowAsTextsGroupAnimationsData(),
      })
    },
    { scope: alsoKnowAsGroupRef },
  )

  return (
    <group
      ref={alsoKnowAsGroupRef}
      {...getAlsoKnowAsTextsGroupDefaultValues}
    >
      <Box />
      {/* <AlsoText />
      <KnowText />
      <AsText /> */}
    </group>
  )
}

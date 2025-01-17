import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import MessGroup from './mess/MessGroup'
// import AlsoKnowAsTextsGroup from '../../also_know_as/texts/AlsoKnowAsTextsGroup'

import {
  foregroundGroupDefaultValues,
  getForegroundGroupAnimationsData,
} from '@/data/hero/three/portrait/foreground/foregroundGroupData'

import { animate } from '@/animation/index'

export default function ForegroundGroup() {
  const { timeline } = useGSAPTimelineContext()

  const foregroundGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: foregroundGroupRef.current,
        animationsData: getForegroundGroupAnimationsData(),
      })
    },
    { scope: foregroundGroupRef },
  )

  return (
    <group
      ref={foregroundGroupRef}
      {...foregroundGroupDefaultValues}
    >
      <MessGroup />
      {/* <AlsoKnowAsTextsGroup /> */}
    </group>
  )
}

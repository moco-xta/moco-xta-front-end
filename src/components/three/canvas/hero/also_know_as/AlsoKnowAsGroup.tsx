import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import LightningComponent from './LightningComponent'
import Buhos from './Buhos'

import {
  alsoKnowAsGroupDefaultValues,
  getAlsoKnowAsGroupAnimationsData,
} from '@/data/hero/three/also_know_as/alsoKnowAsGroupData'

import { showHide } from '@/animation/index'

export default function AlsoKnowAsGroup() {
  const { timeline } = useGSAPTimelineContext()

  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: alsoKnowAsGroupRef.current,
        animationsData: getAlsoKnowAsGroupAnimationsData(),
      })
    },
    { scope: alsoKnowAsGroupRef },
  )

  return (
    <group
      ref={alsoKnowAsGroupRef}
      visible={alsoKnowAsGroupDefaultValues.visible}
    >
      <LightningComponent />
      <Buhos />
    </group>
  )
}

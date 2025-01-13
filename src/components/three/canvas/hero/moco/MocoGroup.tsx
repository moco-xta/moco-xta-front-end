import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import Moco from './Moco'

import {
  mocoGroupDefaultValues,
  getMocoGroupAnimationsData,
} from '@/data/hero/three/moco/mocoGroupData'

import { showHide } from '@/animation/index'

export default function MocoGroup() {
  const { timeline } = useGSAPTimelineContext()

  const mocoGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: mocoGroupRef.current,
        animationsData: getMocoGroupAnimationsData(),
      })
    },
    { scope: mocoGroupRef },
  )

  return (
    <group
      ref={mocoGroupRef}
      name={mocoGroupDefaultValues.name}
      visible={mocoGroupDefaultValues.visible}
    >
      <Moco />
    </group>
  )
}

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import Moco from './Moco'

import {
  mocoGroupDefaultValues,
  getMocoGroupAnimationsData,
} from '@/data/home/hero/three/moco/mocoGroupData'

import { showHide } from 'animations'

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

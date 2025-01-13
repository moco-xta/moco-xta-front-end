import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import type { TElementDefaultValues } from '@/types/data/animation/three/types'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Buho } from '@/components/three/models/hero/also_know_as/Buho'

import {
  buhosDefaultValues,
  getBuhosAnimationsData,
} from '@/data/hero/three/also_know_as/buhosData'

import { animate } from '@/animation/index'

export default function Buhos() {
  const { timeline } = useGSAPTimelineContext()

  const buhosRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: buhosRef.current,
        animationsData: getBuhosAnimationsData(),
        params: {
          withMaterialsArray: true,
          elementsArray: true,
        },
      })
    },
    { scope: buhosRef },
  )

  return (
    <group ref={buhosRef}>
      {buhosDefaultValues.map((buho: TElementDefaultValues, index: number) => {
        return (
          <Buho
            key={`buho_${index}`}
            index={index}
            position={buho.position}
            scale={buho.scale}
          />
        )
      })}
    </group>
  )
}

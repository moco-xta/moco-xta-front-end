import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import type { TDefaultValuesData } from '@/types/animation/three/types'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Buho } from '@/components/three/models/home/hero/also_know_as/Buho'

import {
  buhosDefaultValues,
  getBuhosAnimationsData,
} from '@/data/home/hero/three/also_know_as/buhosData'

import { animate } from 'animations'

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
      {buhosDefaultValues.map((buho: TDefaultValuesData, index: number) => {
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

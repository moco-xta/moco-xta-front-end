import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import type { TDefaultValuesData } from '@/types/animation/types'

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

  /* useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: buhosRef.current,
        animationsData: getBuhosAnimationsData(),
      })
    },
    { scope: buhosRef },
  ) */

  return (
    <group ref={buhosRef}>
      {buhosDefaultValues.map((buho: TDefaultValuesData, index: number) => {
        // console.log('buhosDefaultValues', buhosDefaultValues)
        console.log('buho', buho)
        return (
          <Buho
            key={`buho_${index}`}
            position={buho.position}
            scale={buho.scale}
          />
        )
      })}
    </group>
  )
}

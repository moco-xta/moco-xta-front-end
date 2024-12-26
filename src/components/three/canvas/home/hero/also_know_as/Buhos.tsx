import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Buho } from '@/components/three/models/home/hero/also_know_as/Buho'

import { default as buhosConstants } from '@/constants/home/hero/three/also_know_as/buhosConstants.json'
import {
  getBuhosAnimationsData,
  getBuhosDefaultValues,
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
      })
    },
    { scope: buhosRef },
  )

  return (
    <group ref={buhosRef}>
      {buhosConstants.defaultValues.position.map(({ x, y, z }, index) => (
        <Buho
          key={`buho_${index}`}
          position={new THREE.Vector3(x, y, z)}
          scale={[
            buhosConstants.defaultValues.scale[index].x,
            buhosConstants.defaultValues.scale[index].y,
            buhosConstants.defaultValues.scale[index].z,
          ]}
        />
      ))}
    </group>
  )
}

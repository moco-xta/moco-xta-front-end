import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Buho } from '@/components/three/models/home/hero/also_know_as/Buho'

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
      {Array.isArray(getBuhosDefaultValues.position) &&
        getBuhosDefaultValues.position.map(({ x, y, z }, index) => (
          <Buho
            key={`buho_${index}`}
            position={new THREE.Vector3(x, y, z)}
            scale={[
              (getBuhosDefaultValues.scale as THREE.Vector3[])[index]!.x,
              (getBuhosDefaultValues.scale as THREE.Vector3[])[index]!.y,
              (getBuhosDefaultValues.scale as THREE.Vector3[])[index]!.z,
            ]}
          />
        ))}
    </group>
  )
}

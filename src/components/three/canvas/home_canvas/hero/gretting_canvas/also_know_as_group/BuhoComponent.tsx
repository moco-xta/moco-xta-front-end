import React, { useRef } from 'react'
import * as THREE from 'three'

import { Buho } from '@/components/three/models/home/hero/Buho'

export default function BuhoComponent() {
  const buhoGroupRef = useRef<THREE.Group>(null!)

  return (
    <>
      <Buho
        ref={buhoGroupRef}
        position={new THREE.Vector3(-3.5, 0, 0)}
        scale={2.5}
      />
      <Buho
        ref={buhoGroupRef}
        position={new THREE.Vector3(3.5, 0, 0)}
        scale={new THREE.Vector3(-2.5, 2.5, 2.5)}
      />
    </>
  )
}

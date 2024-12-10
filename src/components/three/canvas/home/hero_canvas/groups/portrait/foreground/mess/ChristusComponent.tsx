import React, { useRef } from 'react'
import * as THREE from 'three'

import { Christus } from '@/components/three/models/home/hero/portrait/Christus'

export default function ChristusComponent() {
  const christusComponentMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <Christus
      ref={christusComponentMeshRef}
      position={new THREE.Vector3(0, 0, 2)}
      rotation={new THREE.Euler(THREE.MathUtils.degToRad(90), 0, 0)}
      scale={[-0.25, 0.25, 0.25]}
    />
  )
}

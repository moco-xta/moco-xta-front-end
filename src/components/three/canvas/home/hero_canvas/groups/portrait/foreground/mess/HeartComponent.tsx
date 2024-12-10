import React, { useRef } from 'react'
import * as THREE from 'three'

import { Heart } from '@/components/three/models/home/hero/portrait/Heart'

export default function HeartComponent() {
  const heartComponentMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <Heart
      ref={heartComponentMeshRef}
      position={new THREE.Vector3(1.5, -3.75, 1)}
      scale={0.5}
    />
  )
}

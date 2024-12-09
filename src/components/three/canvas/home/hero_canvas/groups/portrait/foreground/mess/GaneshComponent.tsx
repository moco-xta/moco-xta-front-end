import React, { useRef } from 'react'
import * as THREE from 'three'

import { Ganesh } from '@/components/three/models/home/hero/portrait/Ganesh'

export default function GaneshComponent() {
  const ganeshComponentMeshRef = useRef<THREE.Mesh>(null!)

  return (
    <Ganesh
      ref={ganeshComponentMeshRef}
      position={new THREE.Vector3(-2.5, -1.5, 0)}
      scale={0.5}
    />
  )
}

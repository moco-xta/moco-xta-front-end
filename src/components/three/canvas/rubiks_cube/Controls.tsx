import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

export default function Controls() {
  return (
    <OrbitControls
      enableZoom={false}
      // autoRotate
      // autoRotateSpeed={0.75}
      target={new THREE.Vector3(0, -1, 1)}
    />
  )
}

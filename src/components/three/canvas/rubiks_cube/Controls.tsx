import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

export default function Controls() {
  return (
    <OrbitControls
      enableZoom={false}
      target={new THREE.Vector3(0, -1, 1)}
    />
  )
}

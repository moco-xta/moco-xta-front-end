import React from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

import { RootState } from '@/redux/store'

export default function Controls() {
  const isActive = useSelector((state: RootState) => state.rubiksCubeState.isActive)

  return (
    <OrbitControls
      enableZoom
      minDistance={7}
      maxDistance={11}
      // target={new THREE.Vector3(0, -1, 1)}
      target={new THREE.Vector3(0, 0, 0)}
      autoRotate={!isActive}
    />
  )
}

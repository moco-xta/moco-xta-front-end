import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

import { RootState } from '@/redux/store'
import { useFrame } from '@react-three/fiber'

export default function Controls() {
  const controlsRef = useRef<any>(null!)

  const rubiksCubeIsLocked = useSelector(
    (state: RootState) => state.rubiksCubeState.rubiksCubeIsLocked,
  )

  useFrame(() => {
    if (controlsRef && controlsRef.current) controlsRef.current.update()
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom
      minDistance={7}
      maxDistance={11}
      target={new THREE.Vector3(0, 0, 0)}
      autoRotate={rubiksCubeIsLocked}
      autoRotateSpeed={0.5}
    />
  )
}

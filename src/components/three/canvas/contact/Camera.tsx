import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/contact/three/cameraData'

export default function CameraWrapper() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <>
      <Float {...cameraDefaultValues.float}>
        <PerspectiveCamera
          ref={cameraRef}
          {...cameraDefaultValues.camera}
        />
      </Float>
      <OrbitControls />
    </>
  )
}

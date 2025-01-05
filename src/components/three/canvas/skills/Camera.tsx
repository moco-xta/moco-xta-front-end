import React, { useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/skills/three/cameraData'

export default function Camera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues.defaultValues.camera}
    />
  )
}

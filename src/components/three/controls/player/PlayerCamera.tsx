import React, { useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'

import type { TPlayerCamera } from '@/types/components/three/types'

export default function PlayerCamera({ cameraDefaultValues }: TPlayerCamera) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues}
    />
  )
}

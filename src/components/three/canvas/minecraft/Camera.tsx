import React, { useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera, useHelper } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/home/hero/three/cameraData'

export default function Camera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  /* useHelper(cameraRef, THREE.CameraHelper) */

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues.defaultValues.camera}
    />
  )
}
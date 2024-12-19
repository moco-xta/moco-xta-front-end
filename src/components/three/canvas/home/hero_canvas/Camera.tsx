import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera, useHelper } from '@react-three/drei'

import { cameraData, floatData } from '@/data/hero/three/canvas/hero/cameraData'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)
  useHelper(perspectiveCameraRef, THREE.CameraHelper)

  /* return (
    <Float {...floatData}>
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        {...cameraData}
      />
    </Float>
  ) */

  return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      {...cameraData.default}
    />
  )
}

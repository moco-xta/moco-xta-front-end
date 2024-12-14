import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera, useHelper } from '@react-three/drei'

import { default as perspectiveCameraConstants } from '@/constants/animations/home/hero/canvas/perspectiveCameraConstants.json'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)
  useHelper(perspectiveCameraRef, THREE.CameraHelper)

  {
    /* return (
    <Float
      speed={perspectiveCameraConstants.FLOAT.SPEED}
      rotationIntensity={perspectiveCameraConstants.FLOAT.ROTAION_INTENSITY}
    >
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        position={[
          perspectiveCameraConstants.POSITION.X,
          perspectiveCameraConstants.POSITION.Y,
          perspectiveCameraConstants.POSITION.Z,
        ]}
        fov={perspectiveCameraConstants.FOV}
      />
    </Float> */
  }

  return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      makeDefault
      position={[
        perspectiveCameraConstants.POSITION.X,
        perspectiveCameraConstants.POSITION.Y,
        perspectiveCameraConstants.POSITION.Z,
      ]}
      fov={perspectiveCameraConstants.FOV}
      // near={perspectiveCameraConstants.NEAR}
      // far={perspectiveCameraConstants.FAR}
    />
  )
}

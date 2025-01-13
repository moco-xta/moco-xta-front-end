import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/hero/three/cameraData'

function Camera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  /* useHelper(cameraRef, THREE.CameraHelper) */

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues.camera}
    />
  )
}

export default function CameraWrapper() {
  return (
    <>
      {!cameraDefaultValues?.float ? (
        <Camera />
      ) : (
        <Float {...cameraDefaultValues.float}>
          <Camera />
        </Float>
      )}
    </>
  )
}

import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera, useHelper } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/home/hero/three/cameraData'

function Camera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  useHelper(cameraRef, THREE.CameraHelper)

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues.defaultValues.camera}
    />
  )
}

export default function CameraWrapper() {
  return (
    <>
      {!cameraDefaultValues.defaultValues?.float ? (
        <Camera />
      ) : (
        <Float {...cameraDefaultValues.defaultValues.float}>
          <Camera />
        </Float>
      )}
    </>
  )
}

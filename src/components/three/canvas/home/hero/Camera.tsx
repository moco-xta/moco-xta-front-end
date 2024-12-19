import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera, useHelper } from '@react-three/drei'

import { cameraData } from '@/data/home/hero/three/cameraData'

export default function Camera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  useHelper(cameraRef, THREE.CameraHelper)

  return (
    <>
      {!cameraData.defaultValues?.float ? (
        <PerspectiveCamera
          ref={cameraRef}
          {...cameraData.defaultValues.camera}
        />
      ) : (
        <Float {...cameraData.defaultValues.float}>
          <PerspectiveCamera
            ref={cameraRef}
            {...cameraData.defaultValues.camera}
          />
        </Float>
      )}
    </>
  )
}

import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera } from '@react-three/drei'

import type { TCamera, TCustomCamera } from '@/types/components/three/types'

function Camera({ defaultValues }: TCamera) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  /* useHelper(cameraRef, THREE.CameraHelper) */

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...defaultValues.camera}
    />
  )
}

export default function CustomCamera({ defaultValues }: TCustomCamera) {
  return (
    <>
      {!defaultValues?.float ? (
        <Camera defaultValues={defaultValues} />
      ) : (
        <Float {...defaultValues.float}>
          <Camera defaultValues={defaultValues} />
        </Float>
      )}
    </>
  )
}

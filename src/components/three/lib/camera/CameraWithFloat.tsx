import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera } from '@react-three/drei'

import type { TCameraDefaultValues } from '@/types/data/components/three/types'

export type TCamera = {
  defaultValues: TCameraDefaultValues
}

export type TCameraWithfloat = {
  defaultValues: TCameraDefaultValues
}

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

export default function CameraWithFloat({ defaultValues }: TCameraWithfloat) {
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

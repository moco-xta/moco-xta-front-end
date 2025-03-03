import React, { useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/canvas/hero/cameraData'

export type TCameraWrapper = {
  terminalType: 'isDesktop' | 'isMobile'
}

export type TCamera = {
  terminalType: 'isDesktop' | 'isMobile'
}

export function Camera({ terminalType }: TCamera) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  /* useHelper(cameraRef, THREE.CameraHelper) */

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues({ terminalType }).camera}
    />
  )
}

import React, { useRef } from 'react'
import * as THREE from 'three'
import { Float, PerspectiveCamera } from '@react-three/drei'

import { cameraDefaultValues } from '@/data/hero/three/cameraData'

export type TCameraWrapper = {
  terminalType: 'isDesktop' | 'isMobile'
}

export type TCamera = {
  terminalType: 'isDesktop' | 'isMobile'
}

function Camera({ terminalType }: TCamera) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  /* useHelper(cameraRef, THREE.CameraHelper) */

  return (
    <PerspectiveCamera
      ref={cameraRef}
      {...cameraDefaultValues({ terminalType }).camera}
    />
  )
}

export default function CameraWrapper({ terminalType }: TCameraWrapper) {
  return (
    <>
      {!cameraDefaultValues({ terminalType })?.float ? (
        <Camera terminalType={terminalType} />
      ) : (
        <Float {...cameraDefaultValues({ terminalType }).float}>
          <Camera terminalType={terminalType} />
        </Float>
      )}
    </>
  )
}

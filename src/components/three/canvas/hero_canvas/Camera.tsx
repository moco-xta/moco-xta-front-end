import React from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Camera() {
  return (
    <PerspectiveCamera
      makeDefault
      position={[
        heroConstants.PERSPECTIVE_CAMERA.POSITION.X,
        heroConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        heroConstants.PERSPECTIVE_CAMERA.POSITION.Z,
      ]}
      rotation={[
        THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.X),
        THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.Y),
        THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.Z),
      ]}
    />
  )
}

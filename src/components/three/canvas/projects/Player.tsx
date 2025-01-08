import React from 'react'
import * as THREE from 'three'

import RapierPlayer from '../../controls/players/RapierPlayer'

import { default as aboutConstants } from '@/constants/three/about/aboutConstants.json'

export default function Player() {
  return (
    <RapierPlayer
      cameraRotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(52),
          THREE.MathUtils.degToRad(0),
          'YXZ',
        )
      }
      fov={55}
      rigidBodyPosition={new THREE.Vector3(-5, 1.5, 6)}
      capsuleColliderArgs={[0.5, 1.5]}
      speed={8}
      jumpForce={4}
      pointerLockControlsSelector={aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR}
    />
  )
}

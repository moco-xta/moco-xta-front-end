import React from 'react'
import * as THREE from 'three'

import RapierPlayer from '../../../controls/players/RapierPlayer'

import { default as aboutConstants } from '@/constants/three/about/aboutConstants.json'

export default function AboutPlayer() {
  return (
    <RapierPlayer
      cameraRotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.X),
          THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Y),
          THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Z),
          'YXZ',
        )
      }
      fov={aboutConstants.PERSPECTIVE_CAMERA.FOV}
      rigidBodyPosition={
        new THREE.Vector3(
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.X,
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          aboutConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        )
      }
      capsuleColliderArgs={[0.5, aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y]}
      speed={aboutConstants.PLAYER.SPEED}
      jumpForce={aboutConstants.PLAYER.JUMP_FORCE}
      pointerLockControlsSelector={aboutConstants.POINTER_LOCK_CONTROLS.SELECTOR}
    />
  )
}

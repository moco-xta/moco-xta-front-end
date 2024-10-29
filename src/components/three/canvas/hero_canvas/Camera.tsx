import React, { useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@theatre/r3f'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

gsap.registerPlugin(useGSAP)

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  useGSAP(() => {
    gsap.from(perspectiveCameraRef.current.position, {
      z: 11,
      duration: 1.5,
      delay: 4.5,
    })
  })

  return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      theatreKey='Camera'
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

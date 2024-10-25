import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  useEffect(() => {
    gsap.registerPlugin(useGSAP)
  }, [])

  useGSAP(() => {
    gsap.from(perspectiveCameraRef.current.position, {
      z: 11,
      duration: 1,
      delay: 5,
    })
  })

  return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
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

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Camera() {
  const { gl, camera, scene } = useThree()

  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)
  const cameraTargetRef = useRef<THREE.Object3D>(new THREE.Object3D())

  const timeline = gsap.timeline()

  useFrame((state, delta, xrFrame) => {
    state.camera.lookAt(cameraTargetRef.current.position)
  })

  useGSAP(() => {
    timeline
      .fromTo(
        cameraTargetRef.current.position,
        {
          x: 0.25,
          y: 20.25,
          z: 0,
        },
        {
          x: 2,
          y: 20.25,
          z: 0,
          duration: 1.5,
          ease: 'none',
        },
      )
      .to(
        perspectiveCameraRef.current.position,
        {
          x: 2,
          duration: 1.5,
          ease: 'none',
        },
        0,
      )
  })

  return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      makeDefault
      /* position={[
          heroConstants.PERSPECTIVE_CAMERA.POSITION.X,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]} */
      position={[0.25, 20.25, 1.5]}
      /* rotation={[
          THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.X),
          THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.Y),
          THREE.MathUtils.degToRad(heroConstants.PERSPECTIVE_CAMERA.ROTATION.Z),
        ]} */
    />
  )
}

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { CameraControls, PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Camera() {
  const { gl, camera, scene } = useThree()

  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)
  const cameraControlsRef = useRef<CameraControls>(null!)
  const cameraTargetRef = useRef<THREE.Object3D>(new THREE.Object3D())

  const timeline = gsap.timeline()

  useFrame((state, delta, xrFrame) => {
    state.camera.lookAt(cameraTargetRef.current.position)
  })

  useGSAP(() => {
    /* timeline.from(cameraTargetRef.current.position, {
      x: 20,
      y: 10,
      z: 0,
      duration: 5,
      ease: 'power2.out',
    }) */
  })

  return (
    <>
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
      <CameraControls ref={cameraControlsRef} />
    </>
  )
}

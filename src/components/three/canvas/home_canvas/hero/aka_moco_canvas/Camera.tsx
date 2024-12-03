import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as mocoCanvasConstants } from '@/constants/canvas/home/mocoCanvasConstants.json'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <Float speed={mocoCanvasConstants.PERSPECTIVE_CAMERA.FLOAT.SPEED}>
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        position={[
          mocoCanvasConstants.PERSPECTIVE_CAMERA.POSITION.X,
          mocoCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          mocoCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={mocoCanvasConstants.PERSPECTIVE_CAMERA.FOV}
      />
    </Float>

    /* return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      makeDefault
      position={[
        mocoCanvasConstants.PERSPECTIVE_CAMERA.POSITION.X,
        mocoCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        mocoCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Z,
      ]}
      fov={mocoCanvasConstants.PERSPECTIVE_CAMERA.FOV}
    /> */
  )
}

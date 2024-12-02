import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  return (
    <Float speed={greetingCanvasConstants.PERSPECTIVE_CAMERA.FLOAT.SPEED}>
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        position={[
          greetingCanvasConstants.PERSPECTIVE_CAMERA.POSITION.X,
          greetingCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          greetingCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={greetingCanvasConstants.PERSPECTIVE_CAMERA.FOV}
      />
    </Float>

    /* return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      makeDefault
      position={[
        greetingCanvasConstants.PERSPECTIVE_CAMERA.POSITION.X,
        greetingCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        greetingCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Z,
      ]}
      fov={greetingCanvasConstants.PERSPECTIVE_CAMERA.FOV}
    /> */
  )
}

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { default as heroCanvasConstants } from '@/constants/three/home/hero/heroCanvasConstants.json'

export default function Camera() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  /* return (
    <Float speed={heroCanvasConstants.PERSPECTIVE_CAMERA.FLOAT.SPEED}>
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        position={[
          heroCanvasConstants.PERSPECTIVE_CAMERA.POSITION.X,
          heroCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          heroCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={heroCanvasConstants.PERSPECTIVE_CAMERA.FOV}
      />
    </Float> */

  return (
    <PerspectiveCamera
      ref={perspectiveCameraRef}
      makeDefault
      position={[
        heroCanvasConstants.PERSPECTIVE_CAMERA.POSITION.X,
        heroCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        heroCanvasConstants.PERSPECTIVE_CAMERA.POSITION.Z,
      ]}
      fov={heroCanvasConstants.PERSPECTIVE_CAMERA.FOV}
    />
  )
}

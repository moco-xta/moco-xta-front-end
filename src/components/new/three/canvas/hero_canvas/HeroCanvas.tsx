import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import useResize from '@/hooks/new/useResize'

import HeroScene from './HeroScene'
import ToneMapping from './ToneMapping'
import PostProcessing from './PostProcessing'

import { default as heroConstants } from '@/constants/new/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/new/assets/imgConstants.json'

export default function HeroCanvas() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  const { innerWidth } = useResize()

  // TODO: Improve function
  const setCameraZPosition = (innerWidth: number) => {
    return (
      15 -
      (innerWidth / 500) *
        heroConstants.PERSPECTIVE_CAMERA.POSITION.IS_NOT_MOBILE.Z
    )
  }

  useEffect(() => {
    if (perspectiveCameraRef.current)
      perspectiveCameraRef.current.position.z = setCameraZPosition(innerWidth)
  }, [innerWidth])

  return (
    <Canvas
      dpr={heroConstants.CANVAS.DPR}
      shadows
      legacy={heroConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: heroConstants.CANVAS.GL.ANTIALIAS,
        alpha: heroConstants.CANVAS.GL.ALPHA,
        powerPreference: heroConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        ref={perspectiveCameraRef}
        makeDefault
        position={[
          heroConstants.PERSPECTIVE_CAMERA.POSITION.IS_NOT_MOBILE.X,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.IS_NOT_MOBILE.Y,
          setCameraZPosition(window.innerWidth),
        ]}
        fov={heroConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={heroConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <Suspense>
        <Physics
          /* debug */
          gravity={[
            heroConstants.PHYSICS.GRAVITY.X,
            heroConstants.PHYSICS.GRAVITY.Y,
            heroConstants.PHYSICS.GRAVITY.Z,
          ]}
        >
          <Environment files={imgConstants.HDRS.HERO_ENVIRONMENT} />
          <HeroScene />
          <ToneMapping />
          <PostProcessing />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import HeroScene from './HeroScene'
import ToneMapping from './ToneMapping'
import PostProcessing from './PostProcessing'

import { default as globalConstants } from '@/constants/globalConstants.json'
import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/assets/imgConstants.json'
import ContactTextScene from '../contact_text_canvas/ContactTextScene'

export default function HeroCanvas() {
  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  const { isLargeScreen } = useIsLargeScreen()

  const setCameraZPosition = (innerWidth: number) => {
    return (
      heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.MIN_POSITION -
      ((heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.MIN_POSITION -
        heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.MAX_POSITION) /
        (heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.LARGER_LIMIT -
          globalConstants.DESKTOP_LIMIT)) *
        (innerWidth - globalConstants.DESKTOP_LIMIT)
    )
  }

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
        position={
          isLargeScreen
            ? [
                heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.INITIAL_POSITION.X,
                heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.INITIAL_POSITION.Y,
                setCameraZPosition(window.innerWidth),
              ]
            : [
                heroConstants.PERSPECTIVE_CAMERA.SMALL_SCREEN.INITIAL_POSITION.X,
                heroConstants.PERSPECTIVE_CAMERA.SMALL_SCREEN.INITIAL_POSITION.Y,
                heroConstants.PERSPECTIVE_CAMERA.SMALL_SCREEN.INITIAL_POSITION.Z,
              ]
        }
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

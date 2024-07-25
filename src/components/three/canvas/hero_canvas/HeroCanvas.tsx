import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import studio from '@theatre/studio'
import { getProject } from '@theatre/core'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'

import { ErrorBoundary } from 'react-error-boundary'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import HeroScene from './HeroScene'
import ToneMapping from './ToneMapping'
import PostProcessing from './PostProcessing'

import { default as globalConstants } from '@/constants/globalConstants.json'
import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/assets/imgConstants.json'
import ContactTextScene from '../contact_text_canvas/ContactTextScene'

studio.extend(extension)
studio.initialize()

export default function HeroCanvas() {
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

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

  const handleFallback = () => {
    return <h1>Loading...</h1>
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
      {/* <Suspense fallback={null}> */}
      <SheetProvider sheet={demoSheet}>
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
        <OrbitControls />
        <e.ambientLight
          theatreKey='ambientLight'
          intensity={heroConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY}
        />
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
      </SheetProvider>
      {/* </Suspense> */}
    </Canvas>
  )
}

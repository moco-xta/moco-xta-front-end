import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import studio from '@theatre/studio'
import { getProject } from '@theatre/core'
import extension from '@theatre/r3f/dist/extension'
import { editable as e, SheetProvider } from '@theatre/r3f'

import { ErrorBoundary } from 'react-error-boundary'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import HeroScene from './HeroScene'
/* import ContactTextScene from '../contact_text_canvas/ContactTextScene' */
import ToneMapping from './ToneMapping'
import PostProcessing from './PostProcessing'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/assets/imgConstants.json'

studio.extend(extension)
studio.initialize()

export default function HeroCanvas() {
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

  const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(null!)

  const { isLargeScreen } = useIsLargeScreen()

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
        preserveDrawingBuffer: heroConstants.CANVAS.GL.PRESERVE_DRAWING_BUFFER,
      }}
    >
      {/* <Suspense fallback={null}> */}
      <ScrollControls
        pages={5}
        damping={1}
        maxSpeed={1}
      >
        <SheetProvider sheet={demoSheet}>
          {/* <PerspectiveCamera
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
          /> */}
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
            {/* <PostProcessing /> */}
          </Physics>
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  )
}

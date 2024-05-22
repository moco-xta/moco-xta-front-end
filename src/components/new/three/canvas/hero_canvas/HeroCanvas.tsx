import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  PerspectiveCamera,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import useIsMobile from '@/hooks/useIsMobile'

import HeroScene from './HeroScene'
import ToneMapping from './ToneMapping'
import PostProcessing from './PostProcessing'

import { default as heroConstants } from '@/constants/new/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/new/assets/imgConstants.json'

export default function HeroCanvas() {
  const { dimensionsType } = useIsMobile()

  useEffect(() => {
    console.log('dimensionsType', dimensionsType)
  }, [dimensionsType])

  if (!dimensionsType) return null

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
        makeDefault
        position={[
          heroConstants.PERSPECTIVE_CAMERA.POSITION.IS_NOT_MOBILE.X,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.IS_NOT_MOBILE.Y,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.IS_NOT_MOBILE.Z,
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

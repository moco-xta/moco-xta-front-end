'use client'

import React, { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import useIsMobile from '@/hooks/useIsMobile'


import HeroScene from './HeroScene'
import PostProcessing from './PostProcessing'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/imgConstants.json'

export default function HeroCanvas() {
  const { dimensionsType } = useIsMobile()

  useEffect(() => {
    console.log('dimensionsType', dimensionsType)
  }, [dimensionsType])

  if(!dimensionsType) return null

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
          heroConstants.PERSPECTIVE_CAMERA.POSITION[dimensionsType].X,
          heroConstants.PERSPECTIVE_CAMERA.POSITION[dimensionsType].Y,
          heroConstants.PERSPECTIVE_CAMERA.POSITION[dimensionsType].Z,
        ]}
        fov={heroConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <OrbitControls />
      <ambientLight />
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
          <PostProcessing />
        </Physics>
      </Suspense>
    </Canvas>
  )
}

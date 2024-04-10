'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import Lights from './lights'
import RubiksCube from './rubiks_cube'
import Controls from './controls'

import { default as rubiksCubeConstants } from '@/constants/rubiksCubeConstants.json'

export default function PerformedWithCanvas() {
  return (
    <Canvas
      dpr={rubiksCubeConstants.CANVAS.DPR}
      shadows
      legacy={rubiksCubeConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: rubiksCubeConstants.CANVAS.GL.ANTIALIAS,
        alpha: rubiksCubeConstants.CANVAS.GL.ALPHA,
        powerPreference: rubiksCubeConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[rubiksCubeConstants.PERSPECTIVE_CAMERA.POSITION.X, rubiksCubeConstants.PERSPECTIVE_CAMERA.POSITION.Y, rubiksCubeConstants.PERSPECTIVE_CAMERA.POSITION.Z]}
        /* position={[5, 7, 5]} */
        fov={rubiksCubeConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <Controls />
      <Lights />
      <Suspense>
        <RubiksCube />
      </Suspense>
    </Canvas>
  )
}

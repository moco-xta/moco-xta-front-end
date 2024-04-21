'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import Lights from '../../lights'
import RubiksCube from './rubiks_cube'
import Controls from './controls'
import PostProcessing from './post_processing'
import { ToneMapping } from './tone_mapping'

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
        position={[
          rubiksCubeConstants.PERSPECTIVE_CAMERA.POSITION.X,
          rubiksCubeConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          rubiksCubeConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={rubiksCubeConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <Controls />
      <Lights
        canvasName={'performed_with'}
        data={rubiksCubeConstants.LIGHTS}
      />
      <Suspense>
        <RubiksCube />
        <ToneMapping />
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}

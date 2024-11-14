import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, PerspectiveCamera } from '@react-three/drei'

import Lights from './Lights'
import Controls from './Controls'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'
import RubiksCubeScene from './RubiksCubeScene'

export default function RubiksCubeCanvas() {
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
      style={{
        width: '100vw',
        height: '100vh',
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
      <Lights />
      <Controls />
      <Suspense>
        <RubiksCubeScene />
      </Suspense>
    </Canvas>
  )
}

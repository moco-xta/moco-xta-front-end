import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import Lights from './Lights'
import Controls from './Controls'
import RubiksCube from './RubiksCube'

import { default as rubiksCubeConstants } from '@/constants/three/rubiksCubeConstants.json'

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
        // fov={rubiksCubeConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <Lights />
      <Controls />
      <Suspense>
        <RubiksCube />
      </Suspense>
    </Canvas>
  )
}

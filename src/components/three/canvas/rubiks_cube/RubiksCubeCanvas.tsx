import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import Controls from './Controls'
import Lights from './Lights'
import Fog from './Fog'
import RubiksCube from './RubiksCube'

import { canvasDefaultValues } from '@/data/skills/rubiks_cube/three/canvasData'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'

export default function RubiksCubeCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera {...cameraDefaultValues} />
      <Controls />
      <Lights />
      <Fog />
      <Suspense fallback={null}>
        <RubiksCube />
      </Suspense>
    </Canvas>
  )
}

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

import Lights from './Lights'

import { canvasDefaultValues } from '@/data/paris_18/three/canvasData'

export default function Paris18Canvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <Lights />
      <OrbitControls />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  )
}

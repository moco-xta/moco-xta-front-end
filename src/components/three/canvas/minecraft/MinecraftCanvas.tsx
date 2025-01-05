import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'

import Camera from './Camera'

import { canvasDefaultValues } from '@/data/minecraft/three/canvasData'

export default function MinecraftCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <Camera />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  )
}

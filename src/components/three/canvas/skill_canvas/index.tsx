import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, PerspectiveCamera } from '@react-three/drei'

export default function SkillCanvas() {
  return (
    <Canvas
      dpr={2}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{
        zIndex: 2,
        position: 'absolute',
        bottom: 0,
        width: '50vw',
        height: '50vw',
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
        fov={55}
      />
      <ambientLight />
      <Suspense>
        <Box />
      </Suspense>
    </Canvas>
  )
}

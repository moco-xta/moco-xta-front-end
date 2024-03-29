import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei'

function IntroductionScene() {
  return (
    <Box />
  )
}

export default function IntroductionCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[-0.1, 0, 2.6]}
        fov={30}
        near={0.1}
        far={55}
      />
      <OrbitControls />
      <pointLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-0, -3, 5]}
        intensity={1}
        castShadow
      />
      <Suspense>
        <IntroductionScene />
      </Suspense>
    </Canvas>
  )
}

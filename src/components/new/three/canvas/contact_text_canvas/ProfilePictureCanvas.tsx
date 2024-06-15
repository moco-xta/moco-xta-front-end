import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'

export default function ProfilePictureCanvas() {
  return (
    <Canvas
      style={{ position: 'absolute' }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        preserveDrawingBuffer: true,
      }}
      camera={{
        fov: 55,
        near: 0.1,
        far: 200,
      }}
    >
      <Box />
    </Canvas>
  )
}
